"use client";
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = (pathname.split("/")[1] === "fr" || pathname.split("/")[1] === "en")
    ? pathname.split("/")[1]
    : "en";

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
