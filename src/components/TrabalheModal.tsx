import { Mail } from "lucide-react";

interface TrabalheModalProps {
  onClose: () => void;
}

export default function TrabalheModal({ onClose }: TrabalheModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-foreground/60 transition hover:bg-secondary hover:text-foreground"
          aria-label="Fechar"
        >
          ✕
        </button>
        <div className="text-center">
          <div className="mx-auto grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl bg-brand/10 text-brand">
            <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
          </div>
          <h3 className="mt-4 sm:mt-5 font-display text-xl sm:text-2xl font-extrabold text-brand-dark">
            Trabalhe Conosco
          </h3>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-foreground/80">
            Quer fazer parte da nossa equipe? Envie seu currículo para o e-mail abaixo:
          </p>
          <a
            href="mailto:administrativo@ruralshopcg.com.br?subject=Curr%C3%ADculo%20-%20Trabalhe%20Conosco"
            className="mt-5 sm:mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-brand-dark break-all sm:break-normal"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span>administrativo@ruralshopcg.com.br</span>
          </a>
          <p className="mt-3 sm:mt-4 text-xs text-muted-foreground">
            Envie seu currículo em anexo (PDF ou Word).
          </p>
        </div>
      </div>
    </div>
  );
}
