const topicos = [
  {
    titulo: 'Front-end',
    descricao: 'HTML, CSS e JavaScript para construir interfaces que o usuário vê e interage.',
  },
  {
    titulo: 'Back-end',
    descricao: 'Lógica de servidor, APIs e regras de negócio por trás da aplicação.',
  },
  {
    titulo: 'Banco de Dados',
    descricao: 'Modelagem e consultas para armazenar e organizar as informações da aplicação.',
  },
  {
    titulo: 'Projetos Reais',
    descricao: 'Construção de projetos completos, do planejamento à entrega, como no mercado de trabalho.',
  },
];

export default function OQueVaiAprender() {
  return (
    <section id="curso" className="bg-dark/0.02">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold text-dark md:text-4xl">
          O que você vai aprender
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {topicos.map((topico) => (
            <div
              key={topico.titulo}
              className="rounded-2xl border border-dark/10 bg-white p-6"
            >
              <div className="h-1 w-10 rounded-full bg-primary" />
              <h3 className="mt-4 font-semibold text-dark">{topico.titulo}</h3>
              <p className="mt-2 text-sm text-dark/70">{topico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 - Array "topicos" no topo do arquivo: em vez de escrever 4 cards repetidos
manualmente no JSX, os dados ficam numa lista e o .map() gera os cards 
— para quando quiser adicionar um 5º tópico.

 - h-1 w-10 rounded-full bg-primary: aquele tracinho roxo fininho acima do
título de cada card é só um detalhe visual de identidade (usa a cor da marca), 
no lugar de um ícone — evita a necessidade de instalar uma biblioteca de ícones
só pra essa seção.

 - Grid responsivo: sm:grid-cols-2 lg:grid-cols-4 — em telas pequenas (menor que sm)
cada card ocupa a largura toda (empilhados), a partir de sm vira 2 colunas, e só no
desktop (lg) vira as 4 colunas lado a lado, como estava no wireframe. 
*/