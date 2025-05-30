import { Router } from 'express';
import { ContactController } from '../controllers/contact.js';

export const contactRouter = Router();

contactRouter.post('/contact', ContactController.sendContactMessage);
