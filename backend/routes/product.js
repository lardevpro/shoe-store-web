// esta clase es solo para definir las rutas del recurso (en este caso el recurso es products)
import { Router } from 'express'
import { ProductController } from '../controllers/product.js'

export const productRouter = Router()

// rutas
productRouter.get('/', ProductController.getAll)
productRouter.get('/:id', ProductController.getById)
productRouter.post('/', ProductController.createProduct)
productRouter.delete('/:id', ProductController.deleteProduct)
productRouter.patch('/:id', ProductController.updateProduct)
