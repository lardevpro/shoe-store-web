import { Router } from 'express'
import { ProductController } from '../controllers/product.js'


export const productRouter = Router()

// get all
productRouter.get('/', ProductController.getAll)
// filter by id
productRouter.get('/:id', ProductController.getById)
// create
productRouter.post('/', ProductController.createShoe)
// delete
productRouter.delete('/:id', ProductController.deleteProduct)
// update shoe
productRouter.patch('/:id',ProductController.updateProduct)

productRouter.post('/login',(req, res)=> {
    res.json({ user : 'lardevpro'})
})

productRouter.post('/register',(req, res)=> {
    
})

productRouter.post('/logout',(req, res)=> {
    
})

productRouter.post('/protected',(req, res)=> {
    
})