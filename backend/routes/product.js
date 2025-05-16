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

// routes/product.js
router.get('/', (req, res) => {
  const { category, gender } = req.query;
  ProductController.getAll({ category, gender })
    .then(products => res.json(products))
    .catch(error => res.status(500).json({ error }));
});
