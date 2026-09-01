import { Suspense } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function EnglishSectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <SiteHeader lang="en" />
      </Suspense>
      {children}
      <Suspense fallback={null}>
        <SiteFooter lang="en" />
      </Suspense>
    </div>
  );
}