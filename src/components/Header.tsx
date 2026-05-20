import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { PHONE_DISPLAY, PHONE_TEL, BUSINESS_NAME } from "@/lib/contact";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="font-display text-xl tracking-wider text-foreground">
            {BUSINESS_NAME}
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#servicos" className="transition-colors hover:text-gold">Serviços</a>
          <a href="#galeria" className="transition-colors hover:text-gold">Galeria</a>
          <a href="#agendar" className="transition-colors hover:text-gold">Agendar</a>
          <a href="#contato" className="transition-colors hover:text-gold">Contato</a>
        </nav>
        <a
          href={PHONE_TEL}
          className="hidden items-center gap-2 rounded-md border border-gold/40 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}
