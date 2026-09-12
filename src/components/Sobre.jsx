export default function Sobre() {
  return (
    <section id="sobre" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <h2 className="text-3xl font-bold text-dark md:text-4xl">
          O curso que te leva do zero ao primeiro emprego em tecnologia
        </h2>

        <p className="mt-6 text-lg text-dark/80">
          O curso Programador Full Stack forma você para atuar em todas as
          camadas de uma aplicação web — desde a interface que o usuário vê até
          o servidor e o banco de dados por trás dela. Não é preciso experiência
          prévia: o conteúdo é construído do zero, com aulas ao vivo e
          acompanhamento próximo em cada etapa.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-dark/10 p-6">
            <h3 className="font-semibold text-dark">Presencial</h3>
            <p className="mt-2 text-sm text-dark/70">
              Aulas na unidade da Codi Academy em Juiz de Fora (MG), com
              professores ao vivo e turma reduzida.
            </p>
          </div>
          <div className="rounded-2xl border border-dark/10 p-6">
            <h3 className="font-semibold text-dark">Online</h3>
            <p className="mt-2 text-sm text-dark/70">
              Aulas ao vivo pela internet, com a mesma estrutura da turma
              presencial — de qualquer cidade do Brasil.
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