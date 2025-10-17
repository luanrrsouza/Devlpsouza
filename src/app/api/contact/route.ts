export async function POST(req: Request) {
  const form = await req.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const message = String(form.get("message") || "");

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ ok: false }), { status: 400 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}

