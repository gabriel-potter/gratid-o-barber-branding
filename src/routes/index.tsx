import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbearia Gratidão — Barbearia Premium em Itajaí (Cidade Nova)" },
      {
        name: "description",
        content:
          "Barbearia premium em Itajaí. Cortes masculinos, barba e cuidado completo. 5,0 no Google. Agende pelo WhatsApp: (47) 99795-4969.",
      },
      { property: "og:title", content: "Barbearia Gratidão — Itajaí" },
      { property: "og:description", content: "Cortes, barba e cuidado masculino premium no coração da Cidade Nova, Itajaí." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Barbearia Gratidão",
          image: "/og.jpg",
          telephone: "+55 47 99795-4969",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Min. Luiz Gallotti, 1195",
            addressLocality: "Itajaí",
            addressRegion: "SC",
            postalCode: "88308-601",
            addressCountry: "BR",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "30" },
          priceRange: "$$",
          openingHours: ["Mo-Fr 09:00-20:00", "Sa 08:00-19:00"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <WhyUs />
        <Gallery />
        <BookingCTA />
        <Location />
      </main>
      <Footer />
      <StickyMobileCTA />
      <Toaster />
    </div>
  );
}
