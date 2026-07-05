export async function POST(request) {
  const formData = await request.formData()
  const email = String(formData.get("email") || "").trim()

  if (!email || !email.includes("@")) {
    return Response.json({ ok: false, error: "A valid email is required." }, { status: 400 })
  }

  return Response.json({
    ok: true,
    message: "Insider request received.",
  })
}
