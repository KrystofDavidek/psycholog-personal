import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, phoneNumber, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.seznam.cz',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const mailOption = {
    from: `${email}`,
    to: `${process.env.NEXT_PUBLIC_EMAIL}`,
    subject: `New mail from ${email}`,
    text: `
    ${name} wrote:
    ${message}
    ${phoneNumber ? `Tel. number is: ${phoneNumber}` : ''}
    `,
  }

  try {
    await transporter.sendMail(mailOption)
    return NextResponse.json({ message: 'success' })
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
