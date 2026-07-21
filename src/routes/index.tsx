import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sprout,
  Wheat,
  FlaskConical,
  HardHat,
  Tractor,
  Syringe,
  ShieldCheck,
  Zap,
  Package,
  Award,
  Truck,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Users,
  Instagram,
  Droplets,
  Layers,
  Flower2,
} from "lucide-react";
import heroImage from "@/assets/hero-ruralshop.jpg";
import logoImage from "@/assets/logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const PHONE_DISPLAY = "(67) 3358-7000";
const WHATSAPP_DISPLAY = "(67) 98767-744";
const WHATSAPP_BASE = "https://wa.me/556798767744";
const ADDRESS = "R. São Borja, 508 - Vila Célia, Campo Grande - MS, 79022-360, Brasil";
const HOURS_WEEK = "Seg a Sex: 07h30 às 17h30";
const HOURS_SAT = "Sáb: 07h30 às 11h30";
const EMAIL_ADMIN = "contato@ruralshopcg.com.br";

const waLink = (msg: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;

const categories = [
  { icon: Sprout, name: "Sementes", msg: "Olá! Gostaria de consultar sementes disponíveis na Ruralshop." },
  { icon: Wheat, name: "Rações", msg: "Olá! Gostaria de consultar rações disponíveis na Ruralshop." },
  { icon: FlaskConical, name: "Fertilizantes", msg: "Olá! Gostaria de consultar fertilizantes na Ruralshop." },
  { icon: HardHat, name: "EPIs", msg: "Olá! Gostaria de consultar EPIs disponíveis na Ruralshop." },
  { icon: Tractor, name: "Equipamentos", msg: "Olá! Gostaria de consultar equipamentos agropecuários na Ruralshop." },
  { icon: Syringe, name: "Produtos Veterinários", msg: "Olá! Gostaria de consultar produtos veterinários na Ruralshop." },
  { icon: ShieldCheck, name: "Defensivos Agrícolas", msg: "Olá! Gostaria de consultar defensivos agrícolas disponíveis na Ruralshop." },
  { icon: Layers, name: "Selaria", msg: "Olá! Gostaria de consultar artigos de selaria na Ruralshop." },
  { icon: Droplets, name: "Irrigação", msg: "Olá! Gostaria de consultar produtos para irrigação na Ruralshop." },
  { icon: Flower2, name: "Jardinagem", msg: "Olá! Gostaria de consultar produtos para jardinagem na Ruralshop." },
];

const differentiators = [
  { icon: Zap, title: "Atendimento rápido no WhatsApp", desc: "Consultas, orçamentos e pedidos respondidos em minutos." },
  { icon: Package, title: "Linha completa de produtos", desc: "Tudo para o campo em um só lugar, sem sair de casa." },
  { icon: Award, title: "Marcas de confiança", desc: "Trabalhamos com as principais marcas do setor agropecuário." },
  { icon: Truck, title: "Entrega e retirada facilitadas", desc: "Retire na loja ou receba com praticidade e agilidade." },
];

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Ruralshop",
          alternateName: "Ruralshop Campo Grande",
          url: "https://www.ruralshopcg.com.br",
          description: "Loja de produtos agropecuários em Campo Grande MS: sementes, rações, fertilizantes, defensivos agrícolas, EPIs, equipamentos rurais, produtos veterinários, selaria, irrigação e jardinagem.",
          image: "https://www.ruralshopcg.com.br/og-image.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua São Borja, 508",
            addressLocality: "Campo Grande",
            addressRegion: "MS",
            postalCode: "79022-360",
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -20.4697,
            longitude: -54.6201,
          },
          telephone: "+556733587000",
          priceRange: "$$",
          currenciesAccepted: "BRL",
          paymentAccepted: "Cash, Credit Card, Debit Card, PIX",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:30",
              closes: "17:30",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "07:30",
              closes: "11:30",
            },
          ],
          sameAs: [
            "https://www.instagram.com/ruralshopcgofc/",
          ],
        }),
      },
    ],
  }),
});

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89a11.8 11.8 0 0 0 1.6 5.94L0 24l6.33-1.66a11.88 11.88 0 0 0 5.72 1.46h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.43-8.43ZM12.06 21.5h-.01a9.6 9.6 0 0 1-4.89-1.34l-.35-.21-3.76.99 1-3.66-.23-.37a9.6 9.6 0 0 1-1.47-5.03c0-5.31 4.32-9.63 9.63-9.63 2.57 0 4.99 1 6.8 2.82a9.57 9.57 0 0 1 2.83 6.82c-.01 5.31-4.33 9.61-9.55 9.61Zm5.28-7.2c-.29-.14-1.71-.84-1.98-.94-.27-.1-.46-.14-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.58-.9-2.17-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.77.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.14.19 2.06 3.15 5 4.42.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.11.56-.08 1.71-.7 1.95-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z" />
    </svg>
  );
}

function LandingPage() {
  const [showTrabalhe, setShowTrabalhe] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Trabalhe Conosco Modal */}
      {showTrabalhe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowTrabalhe(false)}>
          <div className="relative mx-4 w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowTrabalhe(false)}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-foreground/60 transition hover:bg-secondary hover:text-foreground"
              aria-label="Fechar"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-extrabold text-brand-dark">Trabalhe Conosco</h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                Quer fazer parte da nossa equipe? Envie seu currículo para o e-mail abaixo:
              </p>
              <a
                href="mailto:administrativo@ruralshopcg.com.br?subject=Curr%C3%ADculo%20-%20Trabalhe%20Conosco"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
              >
                <Mail className="h-4 w-4" />
                administrativo@ruralshopcg.com.br
              </a>
              <p className="mt-4 text-xs text-muted-foreground">Envie seu currículo em anexo (PDF ou Word).</p>
            </div>
          </div>
        </div>
      )}

      {/* Sticky header */}
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 sm:h-18 max-w-6xl items-center justify-between gap-4 px-4">
          <a href="#top" className="flex items-center">
            <img src={logoImage} alt="Ruralshop" className="h-10 sm:h-[48px] w-auto object-contain" />
          </a>
          <a
            href={waLink("Olá! Gostaria de falar com a Ruralshop.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-whatsapp-dark"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Paisagem rural com plantações verdes ao amanhecer, representando o campo brasileiro"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-dark/58 via-brand/42 to-brand-dark/72" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl text-white">
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              Ruralshop
              <span className="mt-2 block text-gold">O Shopping do Produtor</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
              Encontre tudo para o seu campo: <strong>sementes, rações (grandes e pequenos animais), fertilizantes, EPIs, equipamentos, produtos veterinários, defensivos agrícolas, selaria, irrigação e jardinagem</strong>. Tudo o que o produtor rural precisa com atendimento rápido e orçamento na hora pelo WhatsApp!
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={waLink("Olá! Quero fazer um pedido na Ruralshop.")}
                target="_blank"
                rel="noopener noreferrer"
                className="pulse-cta inline-flex items-center gap-3 rounded-full bg-whatsapp px-7 py-4 text-base font-bold text-white shadow-lg transition hover:bg-whatsapp-dark sm:text-lg"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Fazer Pedido no WhatsApp
              </a>
              <a
                href={`tel:+556733587000`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorias" className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-earth">Nossas categorias</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Tudo para o campo em um só lugar
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Escolha uma categoria e fale com a gente pelo WhatsApp — consulte preço, estoque e disponibilidade na hora.
          </p>
        </div>
        <div className="relative mt-12 px-4 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 flex items-stretch">
              {categories.map(({ icon: Icon, name, msg }) => (
                <CarouselItem
                  key={name}
                  className="pl-4 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex flex-col"
                >
                  <div className="group flex h-full w-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg">
                    <div>
                      <div className="grid h-14 w-14 place-items-center rounded-xl bg-secondary text-brand transition group-hover:bg-brand group-hover:text-primary-foreground">
                        <Icon className="h-7 w-7" strokeWidth={2} />
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold text-brand-dark">{name}</h3>
                    </div>
                    <a
                      href={waLink(msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand/10 px-4 py-2.5 text-center text-sm font-semibold text-brand-dark transition hover:bg-brand hover:text-primary-foreground"
                    >
                      <WhatsAppIcon className="h-4 w-4 shrink-0" />
                      <span>Consultar via WhatsApp</span>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>
        </div>
      </section>

      {/* About */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-earth">Sobre a loja</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Tradição no atendimento ao produtor rural
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              A Ruralshop é referência em produtos agropecuários, unindo variedade, qualidade e um atendimento próximo, feito por quem entende do campo.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/80">
              Do pequeno criador ao grande produtor, nossa missão é facilitar a rotina de quem trabalha na lavoura, na pecuária e no dia a dia rural — com produtos que fazem a diferença e um atendimento pelo WhatsApp que resolve.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard icon={Award} value="+40 anos" label="No mercado" />
            <StatCard icon={Users} value="+10 mil" label="Clientes cadastrados" />
            <StatCard icon={Package} value="+5 mil" label="Itens à disposição" />
            <StatCard icon={ShieldCheck} value="Líder" label="Em herbicidas para pastagens" />
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-earth">Por que a Ruralshop</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Feito para facilitar a sua rotina
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-brand/40 hover:shadow-md"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/20 text-earth">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-brand-dark">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof banner */}
      <section className="bg-brand-dark text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold text-brand-dark">
              <Award className="h-7 w-7" />
            </div>
            <p className="font-display text-2xl font-extrabold">+40 anos servindo o homem do campo</p>
          </div>
          <a
            href={waLink("Olá! Quero saber mais sobre a Ruralshop.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-brand-dark transition hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar agora
          </a>
        </div>
      </section>

      {/* Location */}
      <section id="localizacao" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-earth">Onde estamos</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Venha nos visitar
            </h2>
            <ul className="mt-8 space-y-5">
              <InfoRow icon={MapPin} title="Endereço" value={ADDRESS} />
              <InfoRow icon={Phone} title="Telefone" value={PHONE_DISPLAY} href="tel:+556733587000" />
              <InfoRow icon={Mail} title="E-mail corporativo" value={EMAIL_ADMIN} href={`mailto:${EMAIL_ADMIN}`} />
              <InfoRow
                icon={Clock}
                title="Horário de funcionamento"
                value={
                  <>
                    <div>{HOURS_WEEK}</div>
                    <div>{HOURS_SAT}</div>
                    <div className="text-muted-foreground">Domingo: fechado</div>
                  </>
                }
              />
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Mapa da Ruralshop — R. São Borja, 508"
              src="https://www.google.com/maps?q=Rua+S%C3%A3o+Borja+508&output=embed"
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">
            Pronto para fazer seu pedido?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 sm:text-lg">
            Fale agora mesmo com a nossa equipe pelo WhatsApp — consulte estoque, preço e condições para o seu pedido em minutos.
          </p>
          <a
            href={waLink("Olá! Quero falar com um vendedor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-cta mt-10 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-5 text-lg font-bold text-white shadow-xl transition hover:bg-whatsapp-dark"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Fazer Pedido no WhatsApp
          </a>
          <p className="mt-6 text-sm text-white/70">Ou ligue: {PHONE_DISPLAY}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Ruralshop Logo" className="h-12 w-auto object-contain" />
            </div>
            <p className="mt-4 text-sm text-white/60">O Shopping do Produtor — tudo para o produtor rural em um só lugar.</p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Endereço</h3>
            <p className="mt-4 text-sm text-white/70">{ADDRESS}</p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contato</h3>
            <p className="mt-4 text-sm text-white/70">Telefone: {PHONE_DISPLAY}</p>
            <p className="mt-1 text-sm text-white/70">WhatsApp: {WHATSAPP_DISPLAY}</p>
            <p className="mt-1 text-sm text-white/70">{HOURS_WEEK}</p>
            <p className="text-sm text-white/70">{HOURS_SAT}</p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Redes sociais</h3>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.instagram.com/ruralshopcgofc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Ruralshop"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={waLink("Olá!")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Ruralshop"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-whatsapp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={() => setShowTrabalhe(true)}
              className="mt-5 text-sm font-semibold text-white/70 underline underline-offset-2 transition hover:text-white"
            >
              Trabalhe conosco
            </button>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Ruralshop — O Shopping do Produtor. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={waLink("Olá! Quero falar com a Ruralshop.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale com a Ruralshop no WhatsApp"
        className="pulse-cta fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-2xl transition hover:bg-whatsapp-dark sm:h-16 sm:w-16"
      >
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  );
}

function StatCard({ icon: Icon, value, label }: { icon: React.ComponentType<{ className?: string }>; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <Icon className="h-6 w-6 text-brand" />
      <div className="mt-3 font-display text-2xl font-extrabold text-brand-dark">{value}</div>
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: React.ReactNode;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-brand">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="mt-1 text-base font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block transition hover:opacity-80">{content}</a> : <div>{content}</div>;
}
