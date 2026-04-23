import { NextResponse } from "next/server";

// Resend integration - set RESEND_API_KEY in your .env.local
// For now, it logs the message and returns success
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, projectType } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son requeridos." },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // Send email via Resend
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: ["lealpastelin@gmail.com"],
        subject: `Nuevo contacto: ${name} — ${projectType || "Sin tipo definido"}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4A5D3C;">Nuevo mensaje desde tu portfolio</h2>
            <hr style="border: 1px solid #F0EBE3;" />
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Tipo de proyecto:</strong> ${projectType || "No especificado"}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="background: #FAF6F1; padding: 16px; border-radius: 8px; color: #2C2A27;">
              ${message}
            </p>
            <hr style="border: 1px solid #F0EBE3;" />
            <p style="color: #9C9590; font-size: 12px;">
              Este mensaje fue enviado desde tu portfolio web.
            </p>
          </div>
        `,
        replyTo: email,
      });
    } else {
      // Log to console if no API key (development)
      console.log("📧 New contact form submission:", {
        name,
        email,
        projectType,
        message,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje." },
      { status: 500 }
    );
  }
}
