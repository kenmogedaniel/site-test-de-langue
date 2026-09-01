import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function EnglishSectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <SiteHeader lang="en" />
      {children}
      <SiteFooter lang="en" />
    </div>
  );
}