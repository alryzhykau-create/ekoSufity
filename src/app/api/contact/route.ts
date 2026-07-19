import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  phone: string;
  message: string;
};

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatTelegramMessage(payload: ContactPayload) {
  const lines = [
    "Nowe zapytanie z formularza EkoSufity",
    "",
    `Imię i nazwisko: ${payload.name}`,
    `Telefon: ${payload.phone}`,
    `Wiadomość: ${payload.message || "brak"}`
  ];

  return lines.join("\n");
}

function formatEmailHtml(payload: ContactPayload) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111">
      <h2>Nowe zapytanie z formularza EkoSufity</h2>
      <p><strong>Imię i nazwisko:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Telefon:</strong> ${escapeHtml(payload.phone)}</p>
      <p><strong>Wiadomość:</strong><br>${escapeHtml(payload.message || "brak").replaceAll("\n", "<br>")}</p>
    </div>
  `;
}

async function sendTelegram(payload: ContactPayload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return false;
  }

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatTelegramMessage(payload),
      disable_web_page_preview: true
    })
  });

  if (!response.ok) {
    throw new Error("Telegram nie przyjął wiadomości.");
  }

  return true;
}

async function sendEmail(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!apiKey || !from || !to) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to,
      subject: `Nowe zapytanie EkoSufity: ${payload.name}`,
      html: formatEmailHtml(payload),
      reply_to: to
    })
  });

  if (!response.ok) {
    throw new Error("Email nie został wysłany.");
  }

  return true;
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload: ContactPayload = {
    name: clean(formData.get("name")),
    phone: clean(formData.get("phone")),
    message: clean(formData.get("message"))
  };
  const rodo = clean(formData.get("rodo"));

  if (!payload.name || !payload.phone || !rodo) {
    return NextResponse.json(
      { ok: false, error: "Uzupełnij imię, telefon i zgodę na kontakt." },
      { status: 400 }
    );
  }

  if (payload.name.length > 120 || payload.phone.length > 40 || payload.message.length > 1200) {
    return NextResponse.json({ ok: false, error: "Formularz zawiera zbyt długie dane." }, { status: 400 });
  }

  try {
    const [telegramSent, emailSent] = await Promise.all([sendTelegram(payload), sendEmail(payload)]);

    if (!telegramSent && !emailSent) {
      return NextResponse.json(
        { ok: false, error: "Formularz nie jest jeszcze skonfigurowany po stronie serwera." },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Nie udało się wysłać formularza.";
    return NextResponse.json({ ok: false, error: message }, { status: 502 });
  }
}
