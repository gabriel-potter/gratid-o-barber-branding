import { Instagram, MessageCircle, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  ADDRESS, BUSINESS_NAME, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL,
} from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card pb-24 pt-16 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="font-display text-xl tracking-wider text-foreground">{BUSINESS_NAME}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Barbearia premium no coração de Itajaí. Cortes, barba e cuidado masculino com técnica e respeito.
            </p>
            <div className="mt-5 flex gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={PHONE_TEL}
                 className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold">
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-gold">Navegação</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#servicos" className="hover:text-foreground">Serviços</a></li>
              <li><a href="#galeria" className="hover:text-foreground">Galeria</a></li>
              <li><a href="#agendar" className="hover:text-foreground">Agendar</a></li>
              <li><a href="#contato" className="hover:text-foreground">Contato</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-widest text-gold">Contato</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-gold" />
                <a href={PHONE_TEL} className="hover:text-foreground">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BUSINESS_NAME}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
