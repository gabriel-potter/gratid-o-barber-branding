import { Clock, MapPin, Navigation } from "lucide-react";
import { ADDRESS, ADDRESS_CEP, MAPS_EMBED, MAPS_URL } from "@/lib/contact";

const hours = [
  { day: "Segunda a Sexta", time: "09h — 20h" },
  { day: "Sábado", time: "08h — 19h" },
  { day: "Domingo", time: "Fechado" },
];

export function Location() {
  return (
    <section id="contato" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Localização</p>
          <h2 className="font-display text-4xl text-foreground md:text-6xl">
            Visite nossa barbearia em Itajaí.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border">
              <iframe
                src={MAPS_EMBED}
                title="Mapa da Barbearia Gratidão"
                loading="lazy"
                className="h-full w-full"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
              />
            </div>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-display text-xl text-foreground">Endereço</p>
                  <p className="mt-1 text-sm text-muted-foreground">{ADDRESS}</p>
                  <p className="text-sm text-muted-foreground">{ADDRESS_CEP}</p>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Navigation className="h-4 w-4" />
                Como chegar
              </a>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div className="w-full">
                  <p className="font-display text-xl text-foreground">Horário</p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-3">
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="text-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
