import { Router } from 'express'
import { ProductController } from '../controllers/product.js'


export const productRouter = Router()

// Endpoint principal con filtrado
productRouter.get('/', (req, res) => {
  const { category, gender } = req.query;
  
  ProductController.getAll({ 
    category: category?.toLowerCase(),
    gender: gender?.toLowerCase()
  })
    .then(products => res.json(products))
    .catch(error => res.status(500).json({ 
      error: error.message || 'Internal server error' 
    }));
});

// Resto de endpoints
productRouter.get('/:id', ProductController.getById);
productRouter.post('/', ProductController.createProduct); // ✅ Cambiado a createProduct!!! 
productRouter.delete('/:id', ProductController.deleteProduct);
productRouter.patch('/:id', ProductController.updateProduct);
