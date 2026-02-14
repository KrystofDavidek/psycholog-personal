import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phoneNumber, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.seznam.cz",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOption = {
    from: `${email}`,
    to: `${process.env.NEXT_PUBLIC_EMAIL}`,
    subject: `New mail from ${email}`,
    text: `
    ${name} wrote:
    ${message}
    ${phoneNumber ? `Tel. number is: ${phoneNumber}` : ""}
    `,
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      res.status(500).json({ error: "Failed to send email" });
    } else {
      res.status(200).json({ message: "success" });
    }
  });
}
