/**
 * Scène de sakura : une branche en SVG et des pétales qui tombent en CSS pur.
 * Au Japon, on dit que « les cerisiers fleurissent » (桜が咲く) quand on réussit un
 * examen — c'est l'expression traditionnelle de la réussite scolaire. Ce n'est donc
 * pas une décoration gratuite : c'est le sens même de ce que ce site souhaite pour
 * ses utilisateurs.
 *
 * `variant="hero"` : branche large + pétales nombreux, pour la page d'accueil.
 * `variant="corner"` : version plus discrète, pour les pages internes.
 */
export default function SakuraScene({ variant = "hero" }: { variant?: "hero" | "corner" }) {
  const petalCount = variant === "hero" ? 12 : 6;
  const petals = Array.from({ length: petalCount });

  // Valeurs déterministes (pas de Math.random() pour éviter tout écart serveur/client) :
  // une répartition qui paraît naturelle sans être aléatoire à chaque rendu.
  const seeds = [8, 62, 23, 78, 41, 15, 88, 34, 55, 5, 70, 47];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden>
      <svg
        className={variant === "hero" ? "absolute -top-8 -right-8 w-72 h-72 opacity-90" : "absolute -top-4 -right-4 w-40 h-40 opacity-70"}
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M280 10 C 230 40, 190 70, 150 120 C 120 155, 100 190, 70 240"
          stroke="#5B4636"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M210 55 C 195 75, 185 90, 175 105"
          stroke="#5B4636"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path d="M150 120 C 165 100, 178 88, 195 78" stroke="#5B4636" strokeWidth="3" strokeLinecap="round" opacity="0.4" />

        {[
          [230, 30], [205, 60], [180, 50], [165, 95], [190, 82],
          [140, 130], [120, 150], [155, 140], [95, 195], [110, 210],
        ].map(([cx, cy], i) => (
          <g key={i} transform={`translate(${cx} ${cy})`}>
            {[0, 72, 144, 216, 288].map((rot) => (
              <ellipse
                key={rot}
                cx="0"
                cy="-6"
                rx="4.5"
                ry="7"
                fill="#E8B4C0"
                opacity="0.85"
                transform={`rotate(${rot})`}
              />
            ))}
            <circle r="2" fill="#C97B91" />
          </g>
        ))}
      </svg>

      {petals.map((_, i) => {
        const left = seeds[i % seeds.length];
        const delay = (i * 1.7) % 9;
        const duration = 11 + (i % 5) * 2;
        const size = 8 + (i % 3) * 3;
        return (
          <span
            key={i}
            className="absolute top-[-5%] rounded-[60%_40%_70%_30%/60%_30%_70%_40%] bg-[#E8B4C0] animate-sakura-fall"
            style={{
              left: `${left}%`,
              width: size,
              height: size * 1.3,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity: 0.75,
            }}
          />
        );
      })}
    </div>
  );
}
