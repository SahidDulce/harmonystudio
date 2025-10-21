"use client";

import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-4 bg-[#8B7355] text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-lg font-semibold mb-2">Harmony Studio</h3>
            <p className="text-sm text-gray-300">
              {t("footer.description")}
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Harmony Studio. {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
