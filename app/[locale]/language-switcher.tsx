"use client";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

const LOCALE_LABELS = {
  en: { label: "English", flag: "🇬🇧" },
  fr: { label: "Français", flag: "🇫🇷" },
};

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = (pathname.split("/")[1] === "fr" || pathname.split("/")[1] === "en")
    ? pathname.split("/")[1]
    : "en";
  const otherLocale = currentLocale === "en" ? "fr" : "en";

  function switchLanguage() {
    const segments = pathname.split("/");
    if (segments[0] === "") segments.shift();
    if (segments[0] === "en" || segments[0] === "fr") {
      segments[0] = otherLocale;
    } else {
      segments.unshift(otherLocale);
    }
    let newPath = "/" + segments.join("/");
    newPath = newPath.replace(/\/(en|fr)\/(en|fr)\//, "/$2/");
    if (newPath === "/en" || newPath === "/fr") {
      newPath += "/";
    }
    document.cookie = `NEXT_LOCALE=${otherLocale}; path=/`;
    router.push(newPath);
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <Globe size={18} className="text-white" />
      <button
        onClick={switchLanguage}
        className="flex items-center gap-1 px-3 py-1 rounded border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 transition shadow-sm"
        aria-label={t("switch_language")}
        type="button"
      >
        <span className="text-lg" aria-hidden>{LOCALE_LABELS[otherLocale].flag}</span>
        <span className="font-medium">{LOCALE_LABELS[otherLocale].label}</span>
      </button>
    </div>
  );
}
