import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  // If SMTP not configured, return success (mailto fallback on frontend)
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return NextResponse.json({ ok: true, fallback: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST ?? "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MAYINA Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO ?? "noah.renaud1@gmail.com",
      replyTo: email,
      subject: `[MAYINA] ${subject || "Nouveau message"}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #2a2520;">
          <h2 style="font-weight: 300; font-size: 28px; margin-bottom: 24px;">Nouveau message — MAYINA</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #d4c9b0; margin: 24px 0;" />
          <p style="line-height: 1.7;">${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ ok: true, fallback: true });
  }
}
