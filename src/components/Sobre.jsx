export default function Sobre() {
  {/*<h2 className="text-3xl font-bold text-dark md:text-4xl">
  Sobre o Curso
</h2>

 */}
  return (
    <section id="sobre" className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <h2 className="text-3xl font-bold text-dark md:text-4xl">
          O curso que te leva do zero ao primeiro emprego em tecnologia
        </h2>

        <p className="mt-6 text-lg text-dark/80">
          Prepare-se para se tornar um desenvolvedor completo com o{' '}
          <strong className="text-dark">curso mais completo e prático de programação fullstack</strong>!
          Aprenda as ferramentas e linguagens essenciais para criar desde sites incríveis até sistemas
          robustos, desenvolvendo projetos reais que vão transformar suas ideias em soluções tecnológicas.
        </p>

        <ul className="mt-6 space-y-2 text-left text-dark/80">
          <li><strong className="text-dark">Aulas Práticas e Dinâmicas:</strong> desde o primeiro dia, você estará criando aplicações reais com o suporte de instrutores experientes.</li>
          <li><strong className="text-dark">Projetos Reais:</strong> coloque suas habilidades à prova com desafios do mundo real e construa um portfólio impressionante.</li>
          <li><strong className="text-dark">Abordagem Fullstack:</strong> aprenda o ciclo completo do desenvolvimento — do design à implementação do servidor, tudo em um só lugar!</li>
          <li><strong className="text-dark">Preparação para o Mercado:</strong> conheça as melhores práticas e frameworks mais utilizados pelas grandes empresas de tecnologia.</li>
        </ul>

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