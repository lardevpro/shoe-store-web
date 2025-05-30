import dotenv from 'dotenv'
import { ContactFormModel } from '../models/contact/local-file-contact.js'
dotenv.config()

export class ContactFormController {
  static async send (req, res) {
    const { userName, email, comment } = req.body
    const result = await ContactFormModel.sendContactMessage({ userName, email, comment })
    if (result) return res.json(result)
    res.status(501).json({ message: 'Error ' })
  }
}
