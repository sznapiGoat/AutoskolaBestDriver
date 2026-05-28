"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const courses = [
  "Skupina B – standardní kurz",
  "Skupina B – intenzivní kurz",
  "Skupina AM",
  "Skupina A1",
  "Skupina A2",
  "Skupina A",
  "Doplňovací zkouška A1 → A2",
  "Doplňovací zkouška A2 → A",
  "Vrácení ŘP",
  "Kondiční jízdy",
  "Dárkový poukaz",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 size={36} className="text-green-600" aria-hidden />
        <div>
          <p className="text-base font-semibold text-green-900">Zpráva odeslána!</p>
          <p className="text-sm text-green-700 mt-1 leading-relaxed">
            Brzy se vám ozveme. Děkujeme za zájem o naše kurzy.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Course select */}
      <div>
        <label
          htmlFor="kurz"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Zvolený kurz
        </label>
        <select
          id="kurz"
          name="kurz"
          required
          defaultValue=""
          className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
        >
          <option value="" disabled>
            Vyberte kurz…
          </option>
          {courses.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="jmeno"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Jméno a příjmení
        </label>
        <input
          id="jmeno"
          name="jmeno"
          type="text"
          required
          autoComplete="name"
          placeholder="Jan Novák"
          className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jan@example.cz"
          className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
        />
      </div>

      {/* Note */}
      <div>
        <label
          htmlFor="poznamka"
          className="block text-sm font-medium text-charcoal mb-1.5"
        >
          Poznámka{" "}
          <span className="text-zinc-400 font-normal">(nepovinné)</span>
        </label>
        <textarea
          id="poznamka"
          name="poznamka"
          rows={4}
          placeholder="Napište nám cokoli, co nám pomůže se připravit…"
          className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden />
        ) : (
          <Send size={15} aria-hidden />
        )}
        {loading ? "Odesílám…" : "Odeslat"}
      </button>

      <p className="text-xs text-zinc-400 text-center">
        Vaše údaje používáme výhradně pro zpracování vaší žádosti.
      </p>
    </form>
  );
}
