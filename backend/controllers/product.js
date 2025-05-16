import { ProductModel } from '../models/local-file-system-js/local-file-system.js'
import { validatePartialProduct } from '../schemas/product.js'

export class ProductController  {

  // get all
  static async getAll(req, res)  {
      const { brand } = req.query
      const product = await ProductModel.getAll({ brand })
      res.json(product)
  }

  // ✅ AGREGADO!!!! nuevo método getAll con filtrado por category y gender
  static async getFiltered(req, res) {
    const { category, gender } = req.query;
    
   
    let filteredProducts = await ProductModel.getAll({ 
      category: category?.toLowerCase(),
      gender: gender?.toLowerCase()
    });

    res.json(filteredProducts);
  }

  // get by id
  static async getById(req, res) {
        const { id } = req.params
        const product = await ProductModel.getById({ id })
        if(product) return res.json(product)
        res.status(404).json({ message: 'Product not found'})  
  }

  // create
  static async createShoe (req ,res) {
     const result = validatePartialProduct(req.body)
      
     if (!result.success){
         return res.status(400).json({ error: JSON.parse(result.error.message) })
     }
     
      const newProduct = await ProductModel.create({ input: result.data })
  
      res.status(201).json(newProduct) 
  }

  // delete
  static async deleteProduct (req, res)  {
      const { id } = req.params
  
      const result = await ProductModel.delete({ id })
  
      if (result === false) {
          return res.status(404).json({ message: 'Product file found'})
      }
  
      return res.json({ message: 'Product deleted'})
  }

  // update 
  static async updateProduct (req, res)  {
    const result = validatePartialProduct(req.body)
   
    if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
   
    const { id } = req.params
    
    const updateProduct = await ProductModel.update({ id, input: result.data }) 

    return res.json(updateProduct)
  }
}