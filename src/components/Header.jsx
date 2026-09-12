import { useState } from 'react';
import { whatsappHref } from '../constants/whatsapp';  //link do WhatsApp
//links de navegação do header, cada link tem um label e um href correspondente
const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Curso', href: '#curso' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

//componente Header que renderiza o cabeçalho da página, incluindo o logo,
//  a navegação e o botão do WhatsApp
export default function Header() {
    //estado para controlar se o menu mobile está aberto ou fechado
  const [menuOpen, setMenuOpen] = useState(false);
    //sticky top-0 z-50 faz o header grudar no topo ao rolar, sem precisar de nenhum 
    //JS de scroll — o CSS puro do Tailwind já resolve. 
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm"> 
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-xl font-bold text-dark">
          Codi Academy
        </a>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-dark hover:text-primary transition-colors"
            >
            
              {link.label}
            </a>
          ))}
          {/*O link do WhatsApp é montado em JS (encodeURIComponent) em vez de
           escrito manualmente com %20 — assim, se você mudar a mensagem depois, 
           não precisa se preocupar em re-codificar os espaços e acentos na mão. */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-white hover:bg-primary-light transition-colors"
          >
            Falar no WhatsApp
          </a>
        </nav>

        {/* Botão hambúrguer (mobile) 
        hidden md:flex e md:hidden: é o padrão do Tailwind pra
         alternar entre versão mobile e desktop — abaixo do 
         breakpoint md (768px) mostra o hambúrguer, acima mostra o menu horizontal.*/}
        <button
          className="md:hidden text-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-dark hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-primary px-5 py-2 text-center text-white"
          >
            Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}

/*
Três coisas separadas, deixa eu explicar cada uma:

 - href={whatsappHref} — é o destino do link. Só que em vez de escrever 
a URL direto entre aspas (href="https://wa.me/..."), tem chaves {} 
porque é uma variável JavaScript — a mesma whatsappHref que foi 
montada lá em cima do componente (juntando o número com a mensagem
pré-preenchida). Em JSX, sempre que você quer inserir um valor de 
JS dentro de um atributo HTML, usa chaves em vez de aspas.

 - target="_blank" — diz pro navegador abrir esse link numa aba nova, 
em vez de sair da sua landing page. Faz sentido aqui porque você não 
quer que a pessoa perca a página do curso só porque clicou no botão 
de WhatsApp — ela abre o WhatsApp numa aba separada e a landing page 
continua aberta na aba original.

 - rel="noopener noreferrer" — é uma questão de segurança que sempre 
 acompanha target="_blank". Sem isso, a aba nova (o WhatsApp, nesse caso)
 ganha uma referência de volta pra sua página original via JavaScript
 (window.opener), o que — em teoria — poderia ser explorado por um site
 malicioso pra manipular a aba de origem. noopener corta essa referência.
 noreferrer faz algo parecido e também evita que o WhatsApp receba informação
 de que o clique veio da sua página (cabeçalho de referência). 
 É basicamente um "boas práticas" padrão do mercado: sempre que você usa 
 target="_blank", acompanha com esses dois valores em rel.
*/