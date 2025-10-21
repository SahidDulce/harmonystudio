"use client"

import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
      aria-label="Toggle language"
    >
      <Globe size={16} />
      <span className="font-medium">
        {language === "en" ? "Traducir al Español" : "Translate to English"}
      </span>
    </button>
  )
}
