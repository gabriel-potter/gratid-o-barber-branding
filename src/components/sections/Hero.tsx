import { MessageCircle, Phone, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Interior da Barbearia Gratidão em Itajaí"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-24 pt-32 sm:px-6 md:justify-center md:pb-20">
        <div className="max-w-2xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/30 px-3 py-1.5 text-xs uppercase tracking-widest text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Itajaí · Cidade Nova
          </div>
          <h1 className="font-display text-5xl leading-[0.95] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Seu corte,
            <br />
            <span className="text-gold">sua identidade.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Barbearia premium em Itajaí. Cortes, barba e cuidado masculino feitos
            com técnica, respeito e atenção aos detalhes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-base font-semibold text-whatsapp-foreground shadow-gold transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar no WhatsApp
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/50 bg-background/30 px-6 py-4 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <Phone className="h-5 w-5" />
              Ligar agora
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-foreground/90">5,0 no Google</span>
            <span className="text-border">·</span>
            <span>30 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
}
