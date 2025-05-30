import { Router } from 'express'
import { ContactFormController } from '../controllers/contact-form.js'

export const contactRouter = Router()

contactRouter.post('/', ContactFormController.send)
