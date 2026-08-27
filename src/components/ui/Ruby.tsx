/**
 * Affiche un texte contenant des kanji avec sa lecture en hiragana au-dessus,
 * via les balises HTML natives <ruby>/<rt> conçues pour ça (furigana).
 */
export default function Ruby({
  kanji,
  reading,
  className = "",
}: {
  kanji: string;
  reading: string;
  className?: string;
}) {
  return (
    <ruby className={className}>
      {kanji}
      <rt className="text-[0.5em] font-body font-normal opacity-70 select-none">{reading}</rt>
    </ruby>
  );
}
