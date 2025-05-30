import { Router } from 'express';
import { ContactFormController } from '../controllers/contact-form-controller.js';

export const contactRouter = Router();

contactRouter.post('/', ContactFormController.sendContactMessage);
