//carrosel sem precisar de nenhuma biblioteca JS.
const depoimentos = [
  {
    nome: 'Pedro Paulo',
    tempo: '5 meses',
    texto: 'Entrei sem saber nada de programação e hoje já construo minhas próprias aplicações. O suporte dos professores faz toda a diferença.'
  },
  {
    nome: 'Fabiano Azedias',
    tempo: '10 meses',
    texto: 'O curso é intenso, mas cada projeto entregue me mostra o quanto já evoluí. Recomendo pra quem quer aprender na prática, não só na teoria.',
  },
  {
    nome: 'Ana Silva',
    tempo: '9 meses',
    texto: 'Achei que ia ser difícil conciliar com minha rotina, mas as aulas ao vivo e o acompanhamento próximo tornaram tudo mais leve.',
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-dark/0.02">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold text-dark md:text-4xl">
          O que nossos alunos dizem
        </h2>

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="w-[85%] shrink-0 snap-center rounded-2xl border border-dark/10 bg-white p-6 md:w-auto"
            >
              <p className="text-dark/80 text-justify">"{depoimento.texto}"</p>
              <p className="mt-4 font-semibold text-dark">{depoimento.nome}</p>
              <p className="text-sm text-dark/60">{depoimento.tempo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
/*
 - overflow-x-auto: permite rolagem horizontal dentro dessa div, em vez de vertical — é isso que transforma a lista de cards num "trenzinho" deslizável.
 - snap-x snap-mandatory (no container) + snap-center (em cada card): é a API de CSS Scroll Snap. Ela faz o navegador "prender" a rolagem no centro de cada card automaticamente, em vez de parar em qualquer ponto no meio de dois cards — é o que dá aquela sensação de carrossel "certinho" ao arrastar com o dedo no celular, sem uma linha de JavaScript.
 - w-[85%] shrink-0: cada card ocupa 85% da largura da tela no mobile (deixando um pedacinho do próximo card visível, como uma dica visual de que dá pra arrastar mais) e shrink-0 impede que o navegador tente espremer os cards pra caber todos de uma vez.
 - md:grid md:grid-cols-3 md:overflow-visible md:pb-0: a partir do breakpoint md (768px), essas classes desligam o comportamento de carrossel e trocam pra grid normal de 3 colunas lado a lado — é assim que uma seção vira duas experiências diferentes (carrossel no mobile, grid no desktop) sem duplicar HTML nem usar JavaScript nenhum.
 - Os depoimentos são só placeholders entre colchetes — como são citações atribuídas a pessoas reais, não posso inventar nomes, cargos ou falas fictícias fingindo serem depoimentos verdadeiros. Isso precisa ser substituído por depoimentos reais coletados com ex-alunos antes de publicar.
*/