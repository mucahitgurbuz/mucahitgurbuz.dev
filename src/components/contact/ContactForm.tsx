"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

    // Add Web3Forms access key
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
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-mono font-bold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-6">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <Button
          variant="outline"
          onClick={() => setStatus("idle")}
          className="font-mono"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field for spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" />
      
      {/* Hidden fields for Web3Forms */}
      <input type="hidden" name="from_name" value="Portfolio Contact Form" />
      <input type="hidden" name="subject" value="New message from your portfolio" />

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-mono text-primary">
          name:
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          className="bg-muted/30 border-border font-mono"
          required
          disabled={status === "loading"}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-mono text-primary">
          email:
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          className="bg-muted/30 border-border font-mono"
          required
          disabled={status === "loading"}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-mono text-primary">
          message:
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={6}
          className="bg-muted/30 border-border font-mono resize-none"
          required
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <p className="text-sm font-mono">{errorMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full font-mono bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            await sendMessage();
          </>
        )}
      </Button>
    </form>
  );
}
