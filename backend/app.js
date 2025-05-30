import dotenv from 'dotenv';
import express, { json } from 'express';
import { productRouter } from './routes/product.js';
import { corsMiddleware } from './middlewares/cors.js';
import { PORT } from './config.js';
import { contactRouter } from './routes/contact-form-routes.js';

dotenv.config();

const app = express();

app.use(json());
app.use(corsMiddleware());
app.disable('x-powered-by');

app.use('/contact', contactRouter);
app.use('/products', productRouter);



app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
