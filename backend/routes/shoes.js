import { Router } from 'express'
import { ShoeController } from '../controllers/shoes.js'


export const shoesRouter = Router()

// get all
shoesRouter.get('/', ShoeController.getAll)
// filter by id
shoesRouter.get('/:id', ShoeController.getById)
// create
shoesRouter.post('/', ShoeController.createShoe)
// delete
shoesRouter.delete('/:id', ShoeController.deleteShoe)
// update shoe
shoesRouter.patch('/:id',ShoeController.updateShoe)