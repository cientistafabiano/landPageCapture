const diferenciais = [
  'Professores ao vivo de segunda a sábado',
  'Parcerias com empresas para vagas exclusivas',
  'Oportunidade de estágio na Codi Academy',
  'Escola incubada pela UFJF',
  'Alto índice de empregabilidade entre ex-alunos',
];

export default function Diferenciais() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold text-dark md:text-4xl">
          Por que escolher a Codi Academy?
        </h2>

        <ul className="mt-10 space-y-5">
          {diferenciais.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 shrink-0 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-lg text-dark/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/*
 - shrink-0 no ícone: sem isso, se algum item da lista tiver
texto longo o suficiente pra quebrar em duas linhas, o ícone
poderia espremer e distorcer. Essa classe trava o tamanho dele,
 garantindo que ele não encolha.

 -  SVG puro (o formato de imagem vetorial), não é specific do 
React — vale entender peça por peça:

 - viewBox="0 0 20 20"
Define o "sistema de coordenadas interno" do desenho — como se 
fosse uma grade invisível de 20×20 unidades onde os pontos do 
desenho são posicionados. Os quatro números são: x mínimo, 
y mínimo, largura, altura — nesse caso, a grade vai de (0,0)
 até (20,20). Isso é independente do tamanho real que o ícone
  aparece na tela (que é controlado pela classe h-5 w-5 do 
  Tailwind, lá fora do SVG) — o viewBox só define a "régua" 
  que os pontos do desenho usam entre si.

 - fill="currentColor"
Em vez de definir uma cor fixa (tipo fill="#720eec"), 
currentColor é um valor especial que diz "usa a mesma cor
 que já está definida no color do CSS deste elemento".
  É por isso que a classe text-primary (que no Tailwind 
  controla a propriedade color) consegue pintar o ícone — 
  sem currentColor, a classe text-primary não teria nenhum 
  efeito sobre o SVG, porque color e fill são propriedades diferentes.

<path d="...">
É o elemento que de fato desenha a forma. O atributo d 
("data"/dados do caminho) é uma sequência de comandos que
funcionam como instruções de "caneta": mover pra um ponto,
desenhar uma linha reta até outro ponto, desenhar uma curva,
etc. Cada letra é um comando (M = mover sem desenhar, 
L = linha reta, a/A = arco/curva) seguida das coordenadas 
— é assim que ferramentas como Figma ou Illustrator "exportam"
um desenho vetorial como texto. Não dá pra escrever isso de 
cabeça com facilidade; normalmente você pega esse valor pronto
 de uma biblioteca de ícones ou de um design exportado, não 
 escreve na mão (eu usei um "check" pronto, comum em bibliotecas de ícone open-source).

- fillRule="evenodd" e clipRule="evenodd"
Isso resolve um problema específico: quando um caminho SVG se
 cruza consigo mesmo ou tem partes "dentro" de outras partes 
 (como o buraco de uma rosquinha, ou nesse caso os "cantos" do 
 check que se sobrepõem levemente no desenho), o navegador precisa 
 de uma regra pra saber quais áreas pintar e quais deixar vazadas. 
 evenodd é uma dessas regras de preenchimento (a outra opção seria 
 nonzero, que é o padrão) — sem ela, em certos ícones o desenho pode 
 aparecer com uma parte preenchida que deveria ficar vazada, ou 
 vice-versa. Na prática, você só copia esse valor junto quando 
 pega o ícone pronto de algum lugar; não é algo que você calcula manualmente.

Resumo prático: esse bloco inteiro (svg + path) é, na prática, um "arquivo de ícone" colado diretamente no código em vez de importado de um arquivo .svg separado ou de uma biblioteca — o que ganha em não precisar de dependência extra, mas significa que você não escreve esses d="..." do zero, sempre pega prontos.
*/