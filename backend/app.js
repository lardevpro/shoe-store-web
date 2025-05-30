import dotenv from 'dotenv';
import express, { json } from 'express';
import { productRouter } from './routes/product.js';
import { corsMiddleware } from './middlewares/cors.js';
import { PORT } from './config.js';
import { UserRepository } from './user-repository-auth.js';
import { contactRouter } from './routes/contact.js';

// 1. Configura variables de entorno PRIMERO
dotenv.config();

// 2. Inicializa Express ANTES de usar 'app'
const app = express();

// 3. Aplica middlewares DESPUÉS de inicializar 'app'
app.use(json());
app.use(corsMiddleware());
app.disable('x-powered-by');

// 4. Rutas
app.use('/api', contactRouter);
app.use('/products', productRouter);

app.get('/login', (req, res) => {
  res.json({ user: 'lardevpro' });
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);

  try {
    const id = UserRepository.create({ username, password });
    res.send({ id });
  } catch (error) {
    res.status(400).send({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
