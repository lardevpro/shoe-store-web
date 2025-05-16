import express, { json } from 'express'
import { productRouter } from './routes/product.js'
import { corsMiddleware } from './middlewares/cors.js'
import {PORT} from './config.js' 


const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/products', productRouter)


app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})



