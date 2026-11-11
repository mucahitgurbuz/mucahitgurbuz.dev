"use client";

import { useState, FormEvent } from "react";
import { Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "The message did not send. Try again, or write to the email address instead.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("No connection. Check your network and try again.");
    }
  }

  if (status === "success") {
    return (
      <div role="status">
        <h2 className="title">Message sent</h2>
        <p className="mt-3 text-ink-soft">Thanks for writing. I will reply by email.</p>
        <button type="button" onClick={() => setStatus("idle")} className="link mt-8">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="checkbox" name="botcheck" className="hidden" />
      <input type="hidden" name="from_name" value="Portfolio Contact Form" />
      <input type="hidden" name="subject" value="New message from your portfolio" />

      <label className="block">
        <span className="text-[15px] font-medium">Name</span>
        <input name="name" autoComplete="name" required disabled={status === "loading"} className="field" />
      </label>

      <label className="block">
        <span className="text-[15px] font-medium">Email</span>
        <input name="email" type="email" autoComplete="email" required disabled={status === "loading"} className="field" />
      </label>

      <label className="block">
        <span className="text-[15px] font-medium">Message</span>
        <textarea name="message" rows={5} required disabled={status === "loading"} className="field resize-y" />
      </label>

      {status === "error" && (
        <p role="alert" className="text-[15px] text-destructive">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "loading" ? "Sending" : "Send message"}
      </button>
    </form>
  );
}
