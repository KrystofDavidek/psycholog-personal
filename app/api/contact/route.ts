import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const { name, email, phoneNumber, message } = await req.json()

    // Input validation
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }
    if (name && name.length > 200) {
      return NextResponse.json({ error: 'Name too long' }, { status: 400 })
    }
    if (message && message.length > 5000) {
      return NextResponse.json({ error: 'Message too long' }, { status: 400 })
    }
    if (phoneNumber && phoneNumber.length > 30) {
      return NextResponse.json({ error: 'Phone number too long' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.seznam.cz',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      replyTo: email,
      to: process.env.SMTP_EMAIL,
      subject: `New mail from ${email}`,
      text: `${name} wrote:\n${message}\n${phoneNumber ? `Tel. number is: ${phoneNumber}` : ''}`,
    })

    return NextResponse.json({ message: 'success' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
