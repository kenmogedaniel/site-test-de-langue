export default function Flag({
  code,
  country,
  size = 20,
}: {
  code: string;
  country?: string;
  size?: number;
}) {
  return (
    <span
      className="inline-flex shrink-0 overflow-hidden rounded-full ring-1 ring-sumi/15 dark:ring-washi/20"
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://flagcdn.com/w80/${code}.png`}
        alt={country ?? code}
        width={size}
        height={size}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </span>
  );
}
