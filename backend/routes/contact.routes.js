import { Router } from 'express';
import { ContactController } from '../controllers/contact.controller.js';

export const contactRouter = Router();

contactRouter.post('/contact', ContactController.sendContactMessage);
