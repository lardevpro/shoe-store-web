// src/app/app.config.server.ts
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';  // <-- Cambio clave
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),  // <-- Debe ir primero
    provideServerRouting(serverRoutes)  // <-- Nombre correcto de la función
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
