import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "ks.zerguerras@esi-sba.dz",
      subject: `Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    })
    return Response.json({ ok: true }, { status: 200 })
  } catch {
    return Response.json({ error: "Failed to send email" }, { status: 500 })
  }
}