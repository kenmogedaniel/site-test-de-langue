export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="animate-pulse space-y-8">
        <div className="h-8 w-48 bg-sumi/10 dark:bg-washi/10 rounded-lg" />
        <div className="grid grid-cols-3 gap-4">
          <div className="h-24 bg-sumi/10 dark:bg-washi/10 rounded-2xl" />
          <div className="h-24 bg-sumi/10 dark:bg-washi/10 rounded-2xl" />
          <div className="h-24 bg-sumi/10 dark:bg-washi/10 rounded-2xl" />
        </div>
        <div className="h-40 bg-sumi/10 dark:bg-washi/10 rounded-2xl" />
      </div>
    </div>
  );
}
