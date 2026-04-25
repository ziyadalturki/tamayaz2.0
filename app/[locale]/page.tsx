import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/locales";
import { Marketing } from "@/components/marketing/Marketing";

export default async function Landing({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }
  return <Marketing locale={locale} />;
}
