import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Lucas M.", text: "Ótimos profissionais e ambiente confortável. Voltarei sempre." },
  { name: "Rafael S.", text: "Atendimento nota 100%. Saí com o corte exato que pedi." },
  { name: "Diego A.", text: "Boa recepção e muito profissionalismo. Recomendo demais." },
];

export function SocialProof() {
  return (
    <section className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-gold text-gold" />
            ))}
          </div>
          <p className="mt-3 font-display text-4xl text-foreground md:text-5xl">5,0 no Google</p>
          <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
            30 avaliações · 100% recomendam
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="relative rounded-lg border border-border bg-background p-6 transition-colors hover:border-gold/50"
            >
              <Quote className="absolute right-5 top-5 h-6 w-6 text-gold/30" />
              <div className="mb-3 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-foreground/90">"{r.text}"</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
