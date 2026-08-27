"use client";

import { useState } from "react";

export default function PasswordField({
  id,
  label,
  value,
  onChange,
  autoComplete,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete: string;
  hint?: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label htmlFor={id} className="block text-sm mb-2 text-sumi/70 dark:text-washi/70">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          className="w-full rounded-xl border border-sumi/15 dark:border-washi/15 bg-transparent px-4 py-3 pr-12 outline-none focus:border-ai"
          required
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          aria-pressed={visible}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sumi/40 dark:text-washi/40 hover:text-ai transition-colors p-1"
        >
          {visible ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M3 3l18 18" />
              <path d="M10.6 10.6a3 3 0 0 0 4.24 4.24" />
              <path d="M9.9 5.2A10.5 10.5 0 0 1 12 5c6.5 0 10 7 10 7a13.2 13.2 0 0 1-3.1 3.9M6.1 6.6A13.4 13.4 0 0 0 2 12s3.5 7 10 7c1.3 0 2.5-.2 3.6-.6" />
            </svg>
          )}
        </button>
      </div>
      {hint && <p className="text-xs text-sumi/50 dark:text-washi/50 mt-2">{hint}</p>}
    </div>
  );
}
