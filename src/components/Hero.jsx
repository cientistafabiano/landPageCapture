import { whatsappHref } from '../constants/whatsapp'; //link do WhatsApp

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Texto — vem primeiro no DOM, então aparece primeiro no mobile também */}
        <div>
          <h1 className="text-4xl font-bold leading-tight text-dark md:text-5xl">
            Programe o seu futuro com o curso Full Stack da Codi Academy
          </h1>

          <p className="mt-6 text-lg text-dark/80">
            Aprenda front-end, back-end e banco de dados do zero, com professores
            ao vivo e projetos reais — presencial em Juiz de Fora ou online, de
            qualquer lugar do Brasil.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#formulario"
              className="rounded-full bg-primary px-8 py-3 text-center font-medium text-white hover:bg-primary-light transition-colors"
            >
              Quero me inscrever
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-dark/20 px-8 py-3 text-center font-medium text-dark hover:border-accent hover:text-accent transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Imagem — placeholder até você ter a imagem real */}
        <div className="order-first md:order-last">
          <div className="aspect-4/3 w-full rounded-2xl bg-linear-to-br from-primary to-primary-light" />
        </div>
      </div>
    </section>
  );
}