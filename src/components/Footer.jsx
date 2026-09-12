import { whatsappHref } from '../constants/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm">
        <p className="text-lg font-semibold text-white">Codi Academy</p>
        <p className="mt-2">[Endereço da Codi Academy — confirmar antes de publicar]</p>

        <div className="mt-4 flex justify-center gap-5">
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition-colors">
            YouTube
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-6">© {new Date().getFullYear()} Codi Academy Treinamentos LTDA</p>
      </div>
    </footer>
  );
}