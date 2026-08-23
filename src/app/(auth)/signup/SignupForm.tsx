"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { createClient } from "@/lib/supabase/client";

const schema = z.object({
  displayName: z.string().min(1, "Entrez votre nom.").max(80),
  email: z.string().email("Adresse e-mail invalide."),
  password: z
    .string()
    .min(8, "8 caractères minimum.")
    .regex(/[A-Z]/, "Une majuscule au moins.")
    .regex(/[0-9]/, "Un chiffre au moins."),
});

export default function SignupForm() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const parsed = schema.safeParse({ displayName, email, password });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        data: { display_name: parsed.data.displayName },
      },
    });
    setLoading(false);

    if (signUpError) {
      setError(
        signUpError.message === "User already registered"
          ? "Un compte existe déjà avec cet e-mail."
          : "Une erreur est survenue. Réessayez."
      );
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="displayName" className="block text-sm mb-2 text-sumi/70 dark:text-washi/70">
          Nom
        </label>
        <input
          id="displayName"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          autoComplete="name"
          className="w-full rounded-xl border border-sumi/15 dark:border-washi/15 bg-transparent px-4 py-3 outline-none focus:border-ai"
          required
        />
      </div>
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
      <div>
        <label htmlFor="password" className="block text-sm mb-2 text-sumi/70 dark:text-washi/70">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          className="w-full rounded-xl border border-sumi/15 dark:border-washi/15 bg-transparent px-4 py-3 outline-none focus:border-ai"
          required
        />
        <p className="text-xs text-sumi/50 dark:text-washi/50 mt-2">
          8 caractères minimum, avec une majuscule et un chiffre.
        </p>
      </div>

      {error && (
        <p role="alert" className="text-sm text-hanko">
          {error}
        </p>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? "Création du compte…" : "Créer mon compte"}
      </button>
    </form>
  );
}
