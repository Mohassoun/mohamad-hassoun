import { footerText } from "@/components/portfolio-data";

export function Footer() {
  return (
    <footer className="section-shell py-10 text-center text-sm text-[var(--text-muted)]">
      {footerText}
    </footer>
  );
}
