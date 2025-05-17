import { ProductModel } from '../models/local-file-system-js/local-file-system.js'
import { validatePartialProduct } from '../schemas/product.js'

export class ProductController {
// get all
  static async getAll (req, res) {
    const { gender, category } = req.query
    const products = await ProductModel.getAll({ gender, category })
    res.json(products)
  }

  // get by id
  static async getById (req, res) {
    const { id } = req.params
    const product = await ProductModel.getById({ id })
    if (product) return res.json(product)
    res.status(404).json({ message: 'Product not found' })
  }

  // create
  static async createProduct (req, res) {
    const result = validatePartialProduct(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newProduct = await ProductModel.create({ input: result.data })

    res.status(201).json(newProduct)
  }

  // delete
  static async deleteProduct (req, res) {
    const { id } = req.params

    const result = await ProductModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'Product file found' })
    }

    return res.json({ message: 'Product deleted' })
  }

  // update
  static async updateProduct (req, res) {
    const result = validatePartialProduct(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updateProduct = await ProductModel.update({ id, input: result.data })

    return res.json(updateProduct)
  }
}
