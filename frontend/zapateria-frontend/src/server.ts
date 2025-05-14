import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './main.server';

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine({
    bootstrap,
    providers: [
      { provide: APP_BASE_HREF, useValue: '' }
    ]
  });

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Servir archivos estáticos
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false
  }));

  // Manejar todas las rutas
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, headers } = req;
    
    commonEngine
      .render({
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [
          { provide: APP_BASE_HREF, useValue: req.baseUrl }
        ]
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

// Iniciar servidor
const port = process.env['PORT'] || 4000;
const server = app();

server.listen(port, () => {
  console.log(`Servidor Node Express escuchando en http://localhost:${port}`);
});
