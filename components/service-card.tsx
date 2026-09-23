"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ServiceItem, uiStrings } from "@/components/portfolio-data";
import { useLanguage } from "@/context/language-context";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const syncTheme = () => {
      setIsDark(document.body.classList.contains("theme-dark"));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const iconSrc = isDark && service.darkIcon ? service.darkIcon : service.icon;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setFlipped((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setFlipped((value) => !value);
        }
      }}
      className="h-80 w-full"
    >
      {!flipped ? (
        <div
          className="flex h-full flex-col items-center justify-center rounded-2xl border p-8 text-center transition hover:-translate-y-1"
          style={{
            background: "var(--panel)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)"
          }}
        >
          <Image
            src={iconSrc}
            alt={service.title}
            width={88}
            height={88}
            className="h-20 w-20 object-contain"
          />
          <h3 className="mt-6 font-heading text-xl font-semibold">{service.title}</h3>
        </div>
      ) : (
        <div
          className="flex h-full flex-col justify-between rounded-2xl border p-6 text-left"
          style={{
            background: "var(--panel)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)"
          }}
        >
          <div>
            <h3 className="font-heading text-xl font-semibold">{service.title}</h3>
            <p className="body-copy mt-4 whitespace-pre-line text-sm leading-7">
              {service.description}
            </p>
          </div>
          <a
            href="https://wa.me/966532942434"
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="mt-6 inline-flex w-fit rounded-full bg-[image:var(--brand-gradient)] px-6 py-3 text-sm font-medium text-white shadow-[0_4px_14px_rgba(99,102,241,0.39)] transition-all hover:brightness-110"
          >
            {uiStrings[lang].hireMe}
          </a>
        </div>
      )}
    </div>
  );
}
