import nodemailer from 'nodemailer';

export class ContactController {
  static async sendContactMessage(req, res) {
    const { userName, email, comment } = req.body;

    if (!userName || !email || !comment) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: `"Contacto Web" <${process.env.CONTACT_EMAIL}>`,
      to: 'carmenmariacalzadoscomplemento@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${userName}\nEmail: ${email}\nMensaje: ${comment}`,
      replyTo: email
    };

    try {
      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: 'Message sent successfully.' });
    } catch (error) {
      console.error('Error enviando email:', error);
      res.status(500).json({ error: 'Error sending message.' });
    }
  }
}
