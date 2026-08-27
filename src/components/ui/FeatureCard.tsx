export default function FeatureCard({
  glyph,
  badgeClass,
  title,
  description,
}: {
  glyph: string;
  badgeClass: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card-washi p-7 transition-transform duration-200 hover:-translate-y-1">
      <span
        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl font-display text-xl ${badgeClass}`}
      >
        {glyph}
      </span>
      <h3 className="mt-4 font-body text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-sumi/60 dark:text-washi/60">{description}</p>
    </div>
  );
}
