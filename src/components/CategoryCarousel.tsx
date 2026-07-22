import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89a11.8 11.8 0 0 0 1.6 5.94L0 24l6.33-1.66a11.88 11.88 0 0 0 5.72 1.46h.01c6.55 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.16-3.43-8.43ZM12.06 21.5h-.01a9.6 9.6 0 0 1-4.89-1.34l-.35-.21-3.76.99 1-3.66-.23-.37a9.6 9.6 0 0 1-1.47-5.03c0-5.31 4.32-9.63 9.63-9.63 2.57 0 4.99 1 6.8 2.82a9.57 9.57 0 0 1 2.83 6.82c-.01 5.31-4.33 9.61-9.55 9.61Zm5.28-7.2c-.29-.14-1.71-.84-1.98-.94-.27-.1-.46-.14-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.58-.9-2.17-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.77.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.14.19 2.06 3.15 5 4.42.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.11.56-.08 1.71-.7 1.95-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z" />
    </svg>
  );
}

export interface CategoryItem {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  name: string;
  msg: string;
}

interface CategoryCarouselProps {
  categories: CategoryItem[];
  waLink: (msg: string) => string;
}

export default function CategoryCarousel({ categories, waLink }: CategoryCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-3 sm:-ml-4 flex items-stretch">
        {categories.map(({ icon: Icon, name, msg }) => (
          <CarouselItem
            key={name}
            className="pl-3 sm:pl-4 basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex flex-col"
          >
            <div className="group flex h-full w-full flex-col justify-between rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg">
              <div>
                <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-xl bg-secondary text-brand transition group-hover:bg-brand group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
                </div>
                <h3 className="mt-4 sm:mt-5 font-display text-lg sm:text-xl font-bold text-brand-dark">{name}</h3>
              </div>
              <a
                href={waLink(msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 sm:mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand/10 px-3 py-2.5 text-center text-xs sm:text-sm font-semibold text-brand-dark transition hover:bg-brand hover:text-primary-foreground"
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
  );
}
