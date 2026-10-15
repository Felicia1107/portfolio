import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

const app = express();
const PORT = Number(process.env.PORT || 5000);
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(helmet());
app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json({ limit: '20kb' }));
app.use('/api/contact', rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false }));

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'portfolio-api' }));
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (typeof name !== 'string' || !name.trim() || name.length > 100 ||
      typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200 ||
      typeof message !== 'string' || !message.trim() || message.length > 5000) {
    return res.status(400).json({ message: 'Vérifie les champs du formulaire.' });
  }
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_TO) {
    return res.status(503).json({ message: 'Le formulaire est prêt, mais la configuration email SMTP manque dans backend/.env.' });
  }
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      replyTo: { name: name.trim(), address: email.trim() },
      subject: `Message portfolio : ${name.trim()}`,
      text: `Nom : ${name.trim()}\nEmail : ${email.trim()}\n\nMessage :\n${message.trim()}`
    });
    return res.status(200).json({ message: 'Message envoyé.' });
  } catch (error) {
    console.error('Erreur envoi email:', error.message);
    return res.status(500).json({ message: 'Échec de l’envoi. Réessaie plus tard.' });
  }
});
app.use((_req, res) => res.status(404).json({ message: 'Route introuvable.' }));
app.listen(PORT, () => console.log(`Portfolio API démarrée sur http://localhost:${PORT}`));
