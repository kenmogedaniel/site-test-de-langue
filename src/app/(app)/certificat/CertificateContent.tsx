"use client";

import Flag from "@/components/ui/Flag";

type Completed = { code: string; name: string; flag: string; done: number; total: number };

export default function CertificateContent({
  name,
  email,
  completed,
  date,
}: {
  name: string;
  email: string;
  completed: Completed[];
  date: string;
}) {
  const totalLessons = completed.reduce((a, c) => a + c.done, 0);

  return (
    <div className="py-8">
      <div className="mx-auto mb-6 flex max-w-4xl items-center justify-between">
        <p className="text-sm text-sumi/60 dark:text-washi/60">
          {completed.length > 0 ? `${totalLessons} leçons validées sur ${completed.length} langue${completed.length > 1 ? "s" : ""}` : "Aucun cours validé pour l'instant."}
        </p>
        {completed.length > 0 && (
          <button
            onClick={() => window.print()}
            className="rounded-full bg-bamboo px-5 py-2 text-sm font-medium text-white hover:bg-bamboo-dark transition-colors"
          >
            Imprimer / Télécharger en PDF
          </button>
        )}
      </div>

      {completed.length === 0 ? (
        <p className="mx-auto max-w-md text-center text-sm text-sumi/50 dark:text-washi/50">
          Terminez au moins une leçon pour obtenir votre certificat Kadoya.
        </p>
      ) : (
        <div className="certificate mx-auto max-w-4xl rounded-2xl border border-amber-200 bg-white p-10 text-sumi shadow-2xl print:max-w-none print:rounded-none print:border-0 print:shadow-none">
          <div className="flex items-center justify-between border-b border-amber-200 pb-4">
            <span className="text-2xl">⛩️</span>
            <h1 className="font-display text-2xl tracking-[0.3em] text-amber-800">KADOYA</h1>
            <span className="text-xs uppercase tracking-widest text-amber-700">Attestation</span>
          </div>

          <p className="mt-10 text-center text-xs uppercase tracking-widest text-amber-700/80">
            Certificat de participation
          </p>
          <h2 className="mt-3 text-center font-display text-4xl text-amber-900">{name}</h2>
          <p className="mt-2 text-center text-sm text-neutral-500">{email}</p>

          <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-neutral-600">
            A validé <span className="font-semibold text-amber-800">{totalLessons}</span> leçon
            {totalLessons > 1 ? "s" : ""} de langue sur Kadoya, faisant preuve de persévérance et
            d'engagement dans son apprentissage.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {completed.map((c) => (
              <div key={c.code} className="rounded-lg border border-amber-100 bg-amber-50/60 p-3 text-center">
                <div className="flex items-center justify-center gap-1.5">
                  <Flag code={c.flag} country={c.name} size={16} />
                  <span className="text-sm font-medium text-amber-900">{c.name}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-neutral-500">
                  {c.done}/{c.total}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between text-sm text-neutral-500">
            <div className="text-center">
              <div className="mx-auto mb-1 h-px w-32 bg-neutral-400" />
              <span>Date de délivrance</span>
              <p className="font-medium text-neutral-800">{date}</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-1 h-px w-32 bg-neutral-400" />
              <span>Signature</span>
              <p className="font-display text-2xl text-amber-800">一</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}