import { Router } from 'express'
import { ShoeController } from '../controllers/movies.js'


export const moviesRouter = Router()

// get all
moviesRouter.get('/', ShoeController.getAll)
// filter by id
moviesRouter.get('/:id', ShoeController.getById)
// create
moviesRouter.post('/', ShoeController.createShoe)
// delete
moviesRouter.delete('/:id', ShoeController.deleteShoe)
// update movie
moviesRouter.patch('/:id',ShoeController.updateShoe)