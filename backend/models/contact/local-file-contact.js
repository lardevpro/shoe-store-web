import fs from 'fs/promises'
import SibApiV3Sdk from 'sib-api-v3-sdk'
export class ContactFormModel {
  static async loadContactFormInfo () {
    try {
      const data = await fs.readFile('./db/contact-form-info.json', 'utf-8')
      console.log('JSON file contact form uploaded')
      return JSON.parse(data)
    } catch (error) {
      console.error('Error loading contact form info:', error)
      throw error
    }
  }

  static async sendContactMessage ({ userName, email, comment }) {
    try {
      if (!userName || !email || !comment) {
        return { status: 400, json: { error: 'All fields are required.' } }
      }

      // Configura la API Key (mejor usar la API key que el SMTP)¿esto para qué?
      const client = SibApiV3Sdk.ApiClient.instance
      client.authentications['api-key'].apiKey = process.env.BREVO_API_KEY

      const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
      const contactFormInfo = await ContactFormModel.loadContactFormInfo()

      const sender = contactFormInfo.sender
      const receivers = contactFormInfo.receivers
      const subject = contactFormInfo.subject
      const textContent = `Nombre: ${userName}\nEmail: ${email}\nMensaje: ${comment}`
      let htmlContent = contactFormInfo.htmlContent
      htmlContent = htmlContent.replace('{{userName}}', userName)
      htmlContent = htmlContent.replace('{{email}}', email)
      htmlContent = htmlContent.replace('{{comment}}', comment)

      await apiInstance.sendTransacEmail({
        sender,
        to: receivers,
        subject,
        textContent,
        htmlContent,
        replyTo: { email }
      })

      return { status: 200, json: { success: true, message: 'Message sent successfully.' } }
    } catch (error) {
      console.error('Error en el controlador:', error)
      return { status: 500, json: { error: error.message, details: error.response?.body || error } }
    }
  }
}
