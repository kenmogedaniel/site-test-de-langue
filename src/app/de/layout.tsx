import { Suspense } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function GermanSectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <SiteHeader />
      </Suspense>
      {children}
      <Suspense fallback={null}>
        <SiteFooter />
      </Suspense>
    </div>
  );
}
