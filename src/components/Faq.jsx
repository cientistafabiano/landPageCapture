const perguntas = [
  {
    pergunta: 'O curso é presencial ou online?',
    resposta:
      'As duas opções estão disponíveis: turma presencial na unidade de Juiz de Fora (MG), ou turma online, com aulas ao vivo, para qualquer lugar do Brasil.',
  },
  {
    pergunta: 'Preciso de experiência prévia em programação?',
    resposta:
      'Não. O curso foi construído para começar do zero, sem exigir nenhum conhecimento anterior em programação.',
  },
  {
    pergunta: 'Quais as formas de pagamento?',
    resposta:
      '[A confirmar com a Codi Academy — detalhar formas de pagamento e parcelamento disponíveis antes de publicar.]',
  },
  {
    pergunta: 'Quanto tempo dura o curso?',
    resposta:
      '[A confirmar com a Codi Academy — informar a carga horária/duração exata antes de publicar.]',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold text-dark md:text-4xl">
          Perguntas Frequentes
        </h2>

        <div className="mt-10 space-y-3">
          {perguntas.map((item) => (
            <details
              key={item.pergunta}
              className="group rounded-xl border border-dark/10 p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-dark">
                {item.pergunta}
                <svg
                  className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 4a1 1 0 012 0v5h5a1 1 0 010 2h-5v5a1 1 0 01-2 0v-5H4a1 1 0 010-2h5V4z" />
                </svg>
              </summary>
              <p className="mt-3 text-dark/70">{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 - <details> e <summary>: são tags HTML nativas com comportamento de "abrir/fechar" já embutido no navegador — sem precisar de useState, sem onClick, sem nada de JavaScript. <summary> é sempre o cabeçalho visível (o que fica clicável), e tudo que vier depois dele dentro do <details> só aparece quando está aberto.
 - list-none: por padrão, o navegador desenha uma setinha/triângulo automática do lado do <summary> (o "marcador" de lista). Essa classe remove esse ícone padrão, porque estamos desenhando nosso próprio ícone (o "+") no lugar.
 - group e group-open:rotate-45: esse é o truque pra girar o ícone quando o accordion abre. group no elemento pai (<details>) "marca" ele como referência; group-open é uma variante do Tailwind que só aplica o estilo quando esse elemento pai tem o atributo open (que o navegador adiciona sozinho quando você clica e expande) — nesse caso, girar o "+" em 45 graus, transformando ele visualmente num "×".
 - Duas respostas ficam com placeholder entre colchetes (pagamento e duração) pelo mesmo motivo dos depoimentos: são informações factuais específicas que eu não tenho como confirmar, e errar isso na página seria pior do que deixar em aberto.
*/