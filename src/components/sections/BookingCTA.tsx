import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { PHONE_TEL, WHATSAPP_NUMBER } from "@/lib/contact";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(80),
  phone: z.string().trim().min(8, "Telefone inválido").max(20),
  service: z.string().trim().min(2, "Selecione um serviço").max(60),
  datetime: z.string().trim().min(2, "Informe quando prefere").max(80),
});

export function BookingCTA() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Corte de cabelo", datetime: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    const text = `Olá! Quero agendar um horário.%0A%0A*Nome:* ${parsed.data.name}%0A*Telefone:* ${parsed.data.phone}%0A*Serviço:* ${parsed.data.service}%0A*Preferência:* ${parsed.data.datetime}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="agendar" className="relative overflow-hidden border-y border-border bg-card py-20 md:py-32">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold), transparent 40%)" }} />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold">Agende</p>
          <h2 className="font-display text-4xl text-foreground md:text-6xl">
            Agende seu horário hoje.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Fale direto pelo WhatsApp ou ligue agora — nossa equipe responde rápido para garantir
            seu horário ideal.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-semibold text-whatsapp-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/40 px-5 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <Phone className="h-5 w-5" /> Ligar agora
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-xl border border-border bg-background p-6 md:p-8">
          <div className="grid gap-4">
            <div>
              <label className="mb-1.5 block text-sm text-muted-foreground">Nome</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-input bg-card px-3 py-3 text-foreground outline-none transition-colors focus:border-gold"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-muted-foreground">Telefone</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-md border border-input bg-card px-3 py-3 text-foreground outline-none transition-colors focus:border-gold"
                placeholder="(47) 99999-9999"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-muted-foreground">Serviço desejado</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full rounded-md border border-input bg-card px-3 py-3 text-foreground outline-none transition-colors focus:border-gold"
              >
                {["Corte de cabelo","Barba","Corte + Barba","Barba com navalha","Corte infantil","Pacote noivo","Outro"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-muted-foreground">Data e horário preferido</label>
              <input
                value={form.datetime}
                onChange={(e) => setForm({ ...form, datetime: e.target.value })}
                className="w-full rounded-md border border-input bg-card px-3 py-3 text-foreground outline-none transition-colors focus:border-gold"
                placeholder="Ex: Sábado à tarde"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-gold py-3.5 font-display text-lg tracking-wider text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5"
            >
              Enviar pelo WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
