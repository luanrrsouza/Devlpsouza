import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const form = await req.formData();
  const name = String(form.get("name") || "")
    .trim()
    .slice(0, 200);
  const email = String(form.get("email") || "")
    .trim()
    .slice(0, 200);
  const message = String(form.get("message") || "")
    .trim()
    .slice(0, 5000);
  const whatsappRaw = String(form.get("whatsapp") || "").trim();

  let whatsapp: string | undefined = undefined;
  if (whatsappRaw) {
    const digits = whatsappRaw.replace(/\D/g, "").replace(/^0+/, "");
    let normalized = digits;
    if (
      !normalized.startsWith("55") &&
      (normalized.length === 10 || normalized.length === 11)
    ) {
      normalized = `55${normalized}`;
    }
    if (normalized.length >= 12 && normalized.length <= 13) {
      whatsapp = `+${normalized}`;
    }
  }

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ ok: false, error: "missing_fields" }),
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ ok: false, error: "missing_api_key" }),
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Devlpsouza <onboarding@resend.dev>",
      to: ["luanrrdsouza@gmail.com"],
      replyTo: email,
      subject: "Novo contato: Devlpsouza",
      react: ContactEmail({ name, email, message, whatsapp }),
    });

    if (error) {
      return new Response(JSON.stringify({ ok: false, error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 500,
    });
  }
}
