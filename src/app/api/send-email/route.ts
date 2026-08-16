import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.RESEND_TO_EMAIL!],

      // Clicking Reply in the email will reply directly to the visitor.
      replyTo: email,

      subject:
        subject?.trim() ||
        `New Contact Message from ${name}`,

      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          max-width: 640px;
          margin: 0 auto;
          color: #24332d;
        ">

          <div style="
            background: #1f4037;
            padding: 28px;
            color: white;
          ">
            <h1 style="
              margin: 0;
              font-size: 24px;
            ">
              FJMCAANA
            </h1>

            <p style="
              margin: 8px 0 0;
              opacity: 0.85;
            ">
              New website contact message
            </p>
          </div>

          <div style="padding: 32px;">

            <p>
              <strong>Name:</strong><br />
              ${escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${escapeHtml(email)}
            </p>

            ${
              phone
                ? `
                  <p>
                    <strong>Phone:</strong><br />
                    ${escapeHtml(phone)}
                  </p>
                `
                : ""
            }

            <p>
              <strong>Subject:</strong><br />
              ${escapeHtml(subject || "General Inquiry")}
            </p>

            <div style="margin-top: 28px;">
              <strong>Message:</strong>

              <div style="
                margin-top: 10px;
                padding: 16px;
                background: #f5f7f5;
                border-radius: 8px;
                white-space: pre-wrap;
                line-height: 1.6;
              ">
                ${escapeHtml(message)}
              </div>
            </div>

          </div>

          <div style="
            padding: 20px 32px;
            background: #f5f7f5;
            color: #777;
            font-size: 12px;
          ">
            Sent through the FJMCAANA website contact form.
          </div>

        </div>
      `,
    });

    if (error) {
  console.error("RESEND ERROR:", error);

  return NextResponse.json(
    {
      success: false,
      message: error.message || "Resend failed to send the email.",
    },
    { status: 500 }
  );
}

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
      id: data?.id,
    });
  } catch (error) {
  console.error("CONTACT API ERROR:", error);

  return NextResponse.json(
    {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong.",
    },
    { status: 500 }
  );
}
}

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}