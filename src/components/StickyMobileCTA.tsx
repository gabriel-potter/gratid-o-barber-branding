import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a
        href={PHONE_TEL}
        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
      >
        <Phone className="h-4 w-4 text-gold" />
        Ligar
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-whatsapp py-4 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
