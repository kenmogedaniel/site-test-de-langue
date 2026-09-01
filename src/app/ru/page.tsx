import type { Metadata } from "next";
import LanguageHub from "@/components/lang/LanguageHub";
import { getLanguageCourse } from "@/lib/languageCourses";
import type { InterfaceLang } from "@/lib/uiTranslations";

const course = getLanguageCourse("ru")!;

export function generateMetadata({ searchParams }: { searchParams?: { ui?: string } }): Metadata {
  const lang: InterfaceLang = searchParams?.ui === "en" ? "en" : "fr";
  const locale = lang === "en" ? "en-US" : "fr-FR";
  return {
    title: `${course.name} | Kadoya`,
    alternates: {
      canonical: `/ru`,
      languages: { "x-default": "/", [locale]: `/ru` },
    },
  };
}

export default function RussianHubPage({ searchParams }: { searchParams?: { ui?: string } }) {
  const lang: InterfaceLang = searchParams?.ui === "en" ? "en" : "fr";
  return <LanguageHub course={course} interfaceLang={lang} />;
}
