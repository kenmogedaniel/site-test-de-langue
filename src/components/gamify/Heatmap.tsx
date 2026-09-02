import Link from "next/link";

/** Carte d'activité (GitHub-style) sur ~14 semaines à partir des dates stockées. */
export default function Heatmap({ activityDates }: { activityDates: string[] }) {
  const active = new Set(activityDates);
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - ((today.getDay() + 6) % 7)); // lundi
  const cells: Date[] = [];
  for (let i = 0; i < 98; i++) {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() - i);
    cells.push(d);
  }
  cells.reverse();

  const key = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  const intensity = (d: Date) => (active.has(key(d)) ? "bg-bamboo" : "bg-sumi/10 dark:bg-washi/10");

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-display text-2xl">Carte d'activité</h2>
        <div className="flex items-center gap-1.5 text-[10px] text-sumi/50 dark:text-washi/50">
          <span>Moins</span>
          {["bg-sumi/10 dark:bg-washi/10", "bg-bamboo/30", "bg-bamboo/60", "bg-bamboo"].map((c) => (
            <span key={c} className={`h-2.5 w-2.5 rounded-sm ${c}`} />
          ))}
          <span>Plus</span>
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-7 gap-1">
        {cells.map((d, i) => (
          <span key={i} className={`h-2.5 w-2.5 rounded-sm ${intensity(d)}`} title={key(d)} />
        ))}
      </div>
    </div>
  );
}
