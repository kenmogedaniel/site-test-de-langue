/**
 * Illustration vectorielle originale d'une route bordée de cerisiers en fleurs,
 * perspective centrale, ciel dégradé vif et Mont Fuji en silhouette à l'horizon.
 * Dessinée entièrement en SVG (aucune photo, donc aucun problème de droits) pour
 * servir de fond d'en-tête à la section japonaise.
 */
export default function SakuraRoadScene() {
  // Positions déterministes des frondaisons, du plus proche (grand, bas) au plus
  // lointain (petit, proche de la ligne de fuite), pour donner l'effet de perspective.
  const leftTrees = [
    { x: 40, y: 330, r: 95 }, { x: 145, y: 300, r: 78 }, { x: 235, y: 275, r: 62 },
    { x: 310, y: 255, r: 48 }, { x: 372, y: 240, r: 36 }, { x: 420, y: 228, r: 26 },
  ];
  const rightTrees = [
    { x: 1360, y: 330, r: 95 }, { x: 1255, y: 300, r: 78 }, { x: 1165, y: 275, r: 62 },
    { x: 1090, y: 255, r: 48 }, { x: 1028, y: 240, r: 36 }, { x: 980, y: 228, r: 26 },
  ];

  const canopy = (x: number, y: number, r: number, key: string) => (
    <g key={key}>
      <ellipse cx={x} cy={y + r * 0.75} rx={r * 0.18} ry={r * 0.9} fill="#6B4A3A" />
      <circle cx={x - r * 0.3} cy={y} r={r * 0.62} fill="#F3AFC4" />
      <circle cx={x + r * 0.32} cy={y - r * 0.08} r={r * 0.58} fill="#EF9DB8" />
      <circle cx={x} cy={y - r * 0.42} r={r * 0.6} fill="#FBC7D6" />
      <circle cx={x - r * 0.05} cy={y - r * 0.05} r={r * 0.72} fill="#F6B9CC" opacity="0.9" />
    </g>
  );

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <svg viewBox="0 0 1400 500" preserveAspectRatio="xMidYMax slice" className="w-full h-full">
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7FC1E8" />
            <stop offset="55%" stopColor="#BFDDEE" />
            <stop offset="80%" stopColor="#FBD3DD" />
            <stop offset="100%" stopColor="#FBE0D6" />
          </linearGradient>
          <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C9C0B4" />
            <stop offset="100%" stopColor="#DED5C6" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF3D6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFF3D6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ciel */}
        <rect x="0" y="0" width="1400" height="500" fill="url(#skyGrad)" />

        {/* Halo de soleil */}
        <circle cx="700" cy="200" r="150" fill="url(#sunGlow)" />

        {/* Mont Fuji */}
        <path d="M560 260 L700 105 L840 260 Z" fill="#9FB4C9" opacity="0.75" />
        <path d="M665 150 L700 105 L735 150 L718 148 L700 128 L682 148 Z" fill="#F4F7FA" opacity="0.9" />

        {/* Herbe de part et d'autre de la route */}
        <path d="M0 500 L0 300 C 250 260, 550 250, 700 245 C 850 250, 1150 260, 1400 300 L1400 500 Z" fill="#BFD9B0" opacity="0.55" />

        {/* Route en perspective */}
        <path d="M560 500 L640 240 L760 240 L840 500 Z" fill="url(#roadGrad)" />
        {/* Ligne centrale pointillée */}
        <path
          d="M700 500 L700 245"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeDasharray="22 18"
          opacity="0.8"
        />

        {/* Cerisiers */}
        {leftTrees.map((t, i) => canopy(t.x, t.y, t.r, `l${i}`))}
        {rightTrees.map((t, i) => canopy(t.x, t.y, t.r, `r${i}`))}

        {/* Pétales flottants sur la scène */}
        {[
          [180, 120], [340, 90], [520, 160], [880, 140], [1060, 100], [1220, 150], [700, 60], [420, 60],
        ].map(([x, y], i) => (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="6"
            ry="9"
            fill="#FBC7D6"
            opacity="0.85"
            transform={`rotate(${(i * 47) % 360} ${x} ${y})`}
          />
        ))}
      </svg>
    </div>
  );
}
