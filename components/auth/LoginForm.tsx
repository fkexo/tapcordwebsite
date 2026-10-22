"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

type Mode = "password" | "magic-link";
type Status = "idle" | "submitting" | "magic-link-sent" | "error";

export function LoginForm({ next }: { next: string }) {
  const [mode, setMode] = useState<Mode>("password");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewAccount, setIsNewAccount] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  // Magic link can't distinguish "new" vs "returning" up front the way password
  // mode can, so we always collect name/phone there too - harmless for a
  // returning user (handle_new_user only fires once, on first signup), and
  // guarantees first-time magic-link users aren't missing this on their profile.
  const showIdentityFields = mode === "magic-link" || isNewAccount;

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    let supabase;
    try {
      supabase = getSupabaseBrowserClient();
    } catch {
      setError("Login isn't configured yet. Please check back soon.");
      setStatus("error");
      return;
    }

    const identityData = showIdentityFields ? { full_name: fullName, phone } : undefined;

    if (mode === "magic-link") {
      const { error: signInError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
          data: identityData,
        },
      });
      if (signInError) {
        setError(signInError.message);
        setStatus("error");
        return;
      }
      setStatus("magic-link-sent");
      return;
    }

    const { error: authError } = isNewAccount
      ? await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
            data: identityData,
          },
        })
      : await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError(authError.message);
      setStatus("error");
      return;
    }

    if (isNewAccount) {
      setStatus("magic-link-sent"); // reuse the "check your email" confirmation screen
      return;
    }
    window.location.href = next;
  }

  if (status === "magic-link-sent") {
    return (
      <div className="rounded-2xl border border-orange/30 bg-orange/5 p-6 text-center">
        <p className="font-heading text-lg font-bold text-navy-deep">Check your email</p>
        <p className="mt-2 text-sm text-navy/70">
          {isNewAccount ? (
            <>We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account.</>
          ) : (
            <>We sent a sign-in link to <strong>{email}</strong>. Click it to access your dashboard.</>
          )}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex rounded-full bg-light-bg-alt p-1 text-sm font-semibold">
        <button
          type="button"
          onClick={() => setMode("password")}
          className={`flex-1 rounded-full py-2 transition-colors ${
            mode === "password" ? "bg-navy-deep text-white" : "text-navy-deep/60"
          }`}
        >
          Password
        </button>
        <button
          type="button"
          onClick={() => setMode("magic-link")}
          className={`flex-1 rounded-full py-2 transition-colors ${
            mode === "magic-link" ? "bg-navy-deep text-white" : "text-navy-deep/60"
          }`}
        >
          Email Link
        </button>
      </div>

      {showIdentityFields && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-navy-deep">
              Name
            </label>
            <input
              id="fullName"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy-deep">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
              placeholder="080..."
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-deep">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
          placeholder="you@example.com"
        />
      </div>

      {mode === "password" && (
        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-navy-deep">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setIsNewAccount((v) => !v)}
            className="mt-2 text-xs font-semibold text-orange-ink hover:underline"
          >
            {isNewAccount ? "Already have an account? Sign in" : "New here? Create an account"}
          </button>
        </div>
      )}

      {error && <p className="text-sm font-medium text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-navy-deep px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-navy disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting"
          ? "Please wait..."
          : mode === "magic-link"
            ? "Send sign-in link"
            : isNewAccount
              ? "Create account"
              : "Sign in"}
      </button>
    </form>
  );
}
