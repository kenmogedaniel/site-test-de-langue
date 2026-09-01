export default function RootLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-sumi px-6 text-washi">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-washi/20 border-t-washi" />
      <p className="text-sm text-washi/60">Chargement…</p>
    </div>
  );
}