import dotenv from 'dotenv';
import express, { json } from 'express'
import { productRouter } from './routes/product.js'
import { corsMiddleware } from './middlewares/cors.js'
import { PORT } from './config.js'
import { UserRepository } from './user-repository-auth.js'
import express from 'express';
import { contactRouter } from './routes/contact.routes.js';
import { corsMiddleware } from './middlewares/cors.js';


dotenv.config();
app.use(express.json());
app.use(corsMiddleware());

const app = express()

app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')
app.use('/api', contactRouter);
app.use('/products', productRouter)

app.get('/login', (req, res) => {
  res.json({ user: 'lardevpro' })
})

app.post('/register', (req, res) => {
  const { username, password } = req.body
  console.log(req.body)

  try {
    const id = UserRepository.create({ username, password })
    res.send({ id })
  } catch (error) {
    // SOLO PARA PRUEBAS, hay que quitarlo para producción porque da información sensible
    res.status(400).send({ error })
  }
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
