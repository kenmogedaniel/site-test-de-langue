import Link from "next/link";
import SignupForm from "./SignupForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <Link href="/" className="font-mono text-xs text-sumi/50 dark:text-washi/50 mb-8 inline-block">
          ← Retour à l'accueil
        </Link>
        <h1 className="font-display text-3xl mb-1">Créer un compte</h1>
        <p className="text-sm text-sumi/60 dark:text-washi/60 mb-8">
          Suivez votre progression et reprenez où vous en étiez.
        </p>
        <SignupForm />
        <p className="text-sm text-sumi/60 dark:text-washi/60 mt-6">
          Déjà inscrit ?{" "}
          <Link href="/login" className="text-ai underline underline-offset-2">
            Se connecter
          </Link>
        </p>
      </div>
    </main>
  );
}
