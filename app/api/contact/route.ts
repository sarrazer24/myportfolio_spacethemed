import nodemailer from "nodemailer"
import { siteConfig } from "@/config/site"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] ?? character,
  )
}

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown; message?: unknown }

  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 })
  }

  const name = typeof body.name === "string" ? body.name.trim() : ""
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const message = typeof body.message === "string" ? body.message.trim() : ""

  if (!name || !email || !message || !emailPattern.test(email)) {
    return Response.json({ error: "Name, email, and message are required" }, { status: 400 })
  }

  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS

  if (!emailUser || !emailPass) {
    console.error("Contact form is not configured: EMAIL_USER and EMAIL_PASS are required")
    return Response.json({ error: "Email service is not configured" }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  })

  try {
    await transporter.sendMail({
      from: emailUser,
      to: siteConfig.email,
      replyTo: email,
      subject: `Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
             <p><strong>Email:</strong> ${escapeHtml(email)}</p>
             <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>`,
    })
    return Response.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error("Failed to send contact form email", error)
    return Response.json({ error: "Failed to send email" }, { status: 500 })
  }
}