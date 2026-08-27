"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import PasswordField from "@/components/ui/PasswordField";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (signInError) {
      setError("E-mail ou mot de passe incorrect.");
      return;
    }

    const redirectTo = searchParams.get("redirectedFrom") || "/";
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="email" className="block text-sm mb-2 text-sumi/70 dark:text-washi/70">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="w-full rounded-xl border border-sumi/15 dark:border-washi/15 bg-transparent px-4 py-3 outline-none focus:border-ai"
          required
        />
      </div>
      <PasswordField
        id="password"
        label="Mot de passe"
        value={password}
        onChange={setPassword}
        autoComplete="current-password"
      />

      {error && (
        <p role="alert" className="text-sm text-hanko">
          {error}
        </p>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
