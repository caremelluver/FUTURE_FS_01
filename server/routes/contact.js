const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  try {
    // 1. Save to MongoDB
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // 2. Send email notification (only if credentials are configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_USER !== 'your_gmail@gmail.com') {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
        subject: `[Portfolio] New message: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #050816; color: white; padding: 30px; border-radius: 12px; border: 1px solid rgba(56,189,248,0.3);">
            <h2 style="color: #38BDF8; margin-top: 0;">New Portfolio Message</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #94A3B8; width: 80px;">Name:</td>
                <td style="padding: 8px 0; color: white; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94A3B8;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #38BDF8;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #94A3B8;">Subject:</td>
                <td style="padding: 8px 0; color: white;">${subject}</td>
              </tr>
            </table>
            <hr style="border-color: rgba(56,189,248,0.2); margin: 20px 0;" />
            <h3 style="color: #8B5CF6; margin-top: 0;">Message:</h3>
            <p style="color: #CBD5E1; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            <hr style="border-color: rgba(56,189,248,0.2); margin: 20px 0;" />
            <p style="color: #475569; font-size: 12px;">Sent from deepakdas.dev portfolio | ${new Date().toLocaleString()}</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(201).json({
      success: true,
      message: 'Message received! I\'ll get back to you soon.',
    });

  } catch (error) {
    console.error('Contact route error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again or email directly.',
    });
  }
});

// GET /api/contact — list messages (admin)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }).limit(100);
    res.json({ success: true, data: messages, count: messages.length });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
