import Image from "next/image";
import { socialLinks } from "@/components/portfolio-data";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="flex h-11 w-11 items-center justify-center text-[var(--text)] transition hover:bg-[var(--accent)] hover:text-white"
        >
          <Image src={item.icon} alt={item.label} width={20} height={20} className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
