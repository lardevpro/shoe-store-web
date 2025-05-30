import dotenv from 'dotenv';
import express, { json } from 'express';
import { productRouter } from './routes/product.js';
import { corsMiddleware } from './middlewares/cors.js';
import { PORT } from './config.js';
import { UserRepository } from './user-repository-auth.js';
import { contactRouter } from './routes/contact.js';

dotenv.config();

const app = express();

app.use(json());
app.use(corsMiddleware());
app.disable('x-powered-by');

app.use('/api', contactRouter);
app.use('/products', productRouter);

app.get('/login', (req, res) => {
  res.json({ user: 'lardevpro' });
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
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
