import { Router } from 'express'
import { ProductController } from '../controllers/product.js'


export const productRouter = Router()


// Endpoint principal con filtrado
productRouter.get('/', ProductController.getAll);

// Resto de endpoints
productRouter.get('/:id', ProductController.getById);
productRouter.post('/', ProductController.createProduct); // ✅ Cambiado a createProduct!!! 
productRouter.delete('/:id', ProductController.deleteProduct);
productRouter.patch('/:id', ProductController.updateProduct);

    


