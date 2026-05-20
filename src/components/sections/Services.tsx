import {
  Scissors, User, Baby, Sparkles, Palette, Home, Crown, Brush,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

const services = [
  { icon: Scissors, title: "Corte de Cabelo", desc: "Cortes modernos, clássicos e personalizados para todos os estilos." },
  { icon: User, title: "Barba", desc: "Aparo, modelagem e finalização com produtos premium." },
  { icon: Brush, title: "Barba com Navalha", desc: "Acabamento perfeito com lâmina e toalha quente." },
  { icon: Baby, title: "Corte Infantil", desc: "Ambiente acolhedor para a primeira experiência das crianças." },
  { icon: Scissors, title: "Corte com Tesoura", desc: "Técnica clássica para texturas naturais e fluidas." },
  { icon: Sparkles, title: "Alisamento", desc: "Tratamentos profissionais para fios alinhados e saudáveis." },
  { icon: Palette, title: "Tingimento de Barba", desc: "Coloração natural e duradoura, sob medida." },
  { icon: Palette, title: "Coloração de Cabelo", desc: "Pigmentação profissional com produtos de alta qualidade." },
  { icon: Sparkles, title: "Penteados Afro", desc: "Cuidado especializado para cabelos crespos e cacheados." },
  { icon: Scissors, title: "Raspar Cabeça", desc: "Acabamento limpo e preciso com navalha." },
  { icon: Crown, title: "Pacotes para Noivos", desc: "Experiência completa para o grande dia." },
  { icon: Home, title: "Atendimento Domiciliar", desc: "Levamos a barbearia até você, sob agendamento." },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Serviços</p>
          <h2 className="font-display text-4xl text-foreground md:text-6xl">
            Cuidado completo, do clássico ao moderno.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Cada serviço é feito com técnica, produtos de qualidade e respeito ao seu tempo.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 bg-card p-7 transition-colors hover:bg-secondary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-gold/30 bg-background text-gold transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <span className="mt-auto text-sm font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
                Agendar →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
