import SibApiV3Sdk from 'sib-api-v3-sdk';
import dotenv from 'dotenv';
dotenv.config();

export class ContactController {
  static async sendContactMessage(req, res) {
    try {
      const { userName, email, comment } = req.body;
      if (!userName || !email || !comment) {
        return res.status(400).json({ error: 'All fields are required.' });
      }

      // Configura la API Key
      const client = SibApiV3Sdk.ApiClient.instance;
      client.authentications['api-key'].apiKey = process.env.BREVO_API_KEY;

      const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

      const sender = {
        email: process.env.EMAIL_FROM,
        name: 'Zapatería'
      };

      const receivers = [
        { email: process.env.EMAIL_FROM, name: 'Zapatería' } // Aquí recibes tú el mensaje
      ];

      const subject = 'Nuevo mensaje de contacto';
      const textContent = `Nombre: ${userName}\nEmail: ${email}\nMensaje: ${comment}`;
      const htmlContent = `<h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${comment}</p>`;

      await apiInstance.sendTransacEmail({
        sender,
        to: receivers,
        subject,
        textContent,
        htmlContent,
        replyTo: { email }
      });

      return res.json({ success: true, message: 'Message sent successfully.' });

    } catch (error) {
      console.error('Error en el controlador:', error);
      return res.status(500).json({ error: error.message, details: error.response?.body || error });
    }
  }
}
