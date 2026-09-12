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

/*
 - id="top": é o destino do link "Codi Academy" (logo) no Header, 
que aponta pra #top — sem esse id na seção certa,
aquele link não levaria a lugar nenhum.
 - order-first md:order-last: no wireframe, você definiu que no
mobile o texto vem antes da imagem, mas no desktop a imagem fica
ao lado (à direita). Em vez de duplicar o HTML pra cada tela,
essas duas classes reordenam visualmente o mesmo bloco — no mobile
ele aparece primeiro (mesmo estando depois no código),
no desktop ele volta pra última posição (a grid-cols-2 cuida do lado a lado).
A imagem é só um placeholder (bg-gradient-to-br from-primary to-primary-light)
— um bloco com gradiente das suas próprias cores de marca, 
só pra não deixar vazio enquanto você não tem a imagem/ilustração final.
Troque por uma tag <img> quando tiver o material.
 - text-dark/80: o /80 reduz a opacidade da cor dark pra 80% — 
um recurso do Tailwind pra criar uma variação mais suave da mesma
cor (útil pro parágrafo, que não precisa ser tão escuro/pesado 
quanto o título) sem precisar definir uma cor nova no tema.
O CTA secundário não usa a cor accent como fundo — decidi deixar
como contorno neutro que só fica laranja no hover, 
pra não competir visualmente com o CTA principal (roxo, sólido).
Duas cores de destaque com o mesmo peso visual dividem a atenção de quem está vendo a página.
*/