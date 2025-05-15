import { ShoeModel } from '../models/local-file-system-js/local-file-system.js'
import { validatePartialShoe } from '../schemas/shoes.js'

export class ShoeController  {

  // get all
  static async getAll(req, res)  {
      const { brand } = req.query
      const shoe = await ShoeModel.getAll({ brand })
      res.json(shoe)
  }

  // get by id
  static async getById(req, res) {
        const { id } = req.params
        const shoe = await ShoeModel.getById({ id })
        if(shoe) return res.json(shoe)
        res.status(404).json({ message: 'Shoe not found'})  
  }

  // create
  static async createShoe (req ,res) {
     const result = validatePartialShoe(req.body)
      
     if (!result.success){
         return res.status(400).json({ error: JSON.parse(result.error.message) })
     }
     
      const newShoe = await ShoeModel.create({ input: result.data })
  
      res.status(201).json(newShoe) 
  }

  // delete
  static async deleteShoe (req, res)  {
      const { id } = req.params
  
      const result = await ShoeModel.delete({ id })
  
      if (result === false) {
          return res.status(404).json({ message: 'shoe file found'})
      }
  
      return res.json({ message: 'shoe deleted'})
  }

  // update 
  static async updateShoe (req, res)  {
    const result = validatePartialShoe(req.body)
   
    if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
   
    const { id } = req.params
    
    const updateShoe = await ShoeModel.update({ id, input: result.data }) 

    return res.json(updateShoe)
  }
}