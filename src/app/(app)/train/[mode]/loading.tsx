export default function Loading() {
  return (
    <div className="max-w-2xl mx-auto animate-pulse">
      <div className="h-1 bg-sumi/10 dark:bg-washi/10 rounded-full mb-8" />
      <div className="card-washi p-8 space-y-6">
        <div className="h-3 w-32 bg-sumi/10 dark:bg-washi/10 rounded" />
        <div className="h-8 w-full bg-sumi/10 dark:bg-washi/10 rounded" />
        <div className="h-12 w-12 bg-sumi/10 dark:bg-washi/10 rounded-full" />
        <div className="space-y-3 pt-4">
          <div className="h-12 bg-sumi/10 dark:bg-washi/10 rounded-xl" />
          <div className="h-12 bg-sumi/10 dark:bg-washi/10 rounded-xl" />
          <div className="h-12 bg-sumi/10 dark:bg-washi/10 rounded-xl" />
          <div className="h-12 bg-sumi/10 dark:bg-washi/10 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
