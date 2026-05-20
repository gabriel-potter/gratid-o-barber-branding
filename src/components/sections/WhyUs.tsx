import { Award, Heart, MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";

const items = [
  { icon: Award, title: "Profissionais experientes", desc: "Equipe treinada com anos de prática em cortes masculinos." },
  { icon: Sparkles, title: "Ambiente confortável", desc: "Espaço pensado para você relaxar enquanto cuidamos do visual." },
  { icon: Heart, title: "Atendimento humanizado", desc: "Cada cliente é único — escutamos antes de cortar." },
  { icon: ShieldCheck, title: "Atendimento profissional", desc: "Higiene, pontualidade e respeito como padrão." },
  { icon: Users, title: "Excelente avaliação local", desc: "5,0 estrelas no Google e clientes fiéis no bairro." },
  { icon: MapPin, title: "Fácil acesso em Itajaí", desc: "Localização privilegiada no coração da Cidade Nova." },
];

export function WhyUs() {
  return (
    <section className="border-y border-border bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Por que nos escolher</p>
          <h2 className="font-display text-4xl text-foreground md:text-6xl">
            Tradição local, padrão premium.
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gold/10 text-gold">
                <i.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wide text-foreground">{i.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
