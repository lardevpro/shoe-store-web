import { Router } from 'express'
import { ProductController } from '../controllers/product.js'

export const productRouter = Router()

productRouter.get('/', ProductController.getAll)
productRouter.get('/:id', ProductController.getById)
productRouter.post('/', ProductController.createProduct)
productRouter.delete('/:id', ProductController.deleteProduct)
productRouter.patch('/:id', ProductController.updateProduct)
