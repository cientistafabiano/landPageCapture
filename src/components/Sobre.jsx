
  {/*<h2 className="text-3xl font-bold text-dark md:text-4xl">
  Sobre o Curso
</h2>

 */}
  const destaques = [
  { titulo: 'Aulas ao vivo', descricao: 'Prática desde o primeiro dia, com instrutores experientes.' },
  { titulo: 'Projetos reais', descricao: 'Desafios de verdade pro seu portfólio.' },
  { titulo: 'Full Stack completo', descricao: 'Do design à implementação do servidor.' },
  { titulo: 'Foco no mercado', descricao: 'As práticas e frameworks mais usados hoje.' },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <h2 className="text-3xl font-bold text-dark md:text-4xl">
          Do zero ao primeiro emprego em tecnologia
        </h2>

        <p className="mt-4 text-lg text-dark/80">
          O curso mais completo e prático de programação fullstack — para criar desde sites até sistemas robustos.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {destaques.map((item) => (
            <div key={item.titulo} className="rounded-xl border border-dark/10 p-4 text-left">
              <p className="font-semibold text-dark">{item.titulo}</p>
              <p className="mt-1 text-sm text-dark/70">{item.descricao}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-1 border-accent p-6">
            <h3 className="font-semibold text-dark">Presencial</h3>
            <p className="mt-2 text-sm text-dark/70">
              Aulas na unidade da Codi Academy em Juiz de Fora (MG), com professores ao vivo e turma reduzida.
            </p>
          </div>
          <div className="rounded-2xl border-1 border-sucess p-6">
            <h3 className="font-semibold text-dark">Online</h3>
            <p className="mt-2 text-sm text-dark/70">
              Aulas ao vivo pela internet, com a mesma estrutura da turma presencial — de qualquer cidade do Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
/*
largura limitada (max-w-4xl): diferente do Hero (que é duas colunas), 
essa seção é só texto — limitar a largura evita linhas de texto 
compridas demais, que ficam difíceis de ler (regra geral de tipografia:
menos de ~80 caracteres por linha).
*/