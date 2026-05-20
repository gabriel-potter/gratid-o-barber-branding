import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g4, alt: "Interior da barbearia", className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" },
  { src: g2, alt: "Corte degradê moderno", className: "aspect-[3/4]" },
  { src: g1, alt: "Barba aparada com navalha", className: "aspect-[3/4]" },
  { src: g5, alt: "Trabalho de fade preciso", className: "aspect-square" },
  { src: g3, alt: "Ferramentas profissionais", className: "aspect-square" },
  { src: g6, alt: "Corte infantil acolhedor", className: "aspect-square md:col-span-2" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Galeria</p>
            <h2 className="font-display text-4xl text-foreground md:text-6xl">
              O trabalho fala por si.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Resultados reais de clientes reais — feitos por nossos barbeiros aqui em Itajaí.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-lg border border-border bg-card ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
