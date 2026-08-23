import Link from "next/link";
import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <Link href="/" className="font-mono text-xs text-sumi/50 dark:text-washi/50 mb-8 inline-block">
          ← Retour à l'accueil
        </Link>
        <h1 className="font-display text-3xl mb-1">Se connecter</h1>
        <p className="text-sm text-sumi/60 dark:text-washi/60 mb-8">
          Reprenez votre entraînement là où vous l'avez laissé.
        </p>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
        <p className="text-sm text-sumi/60 dark:text-washi/60 mt-6">
          Pas encore de compte ?{" "}
          <Link href="/signup" className="text-ai underline underline-offset-2">
            S'inscrire
          </Link>
        </p>
      </div>
    </main>
  );
}
