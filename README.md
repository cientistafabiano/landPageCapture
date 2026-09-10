## HTML
os dois preconnect adiantam a conexão com os servidores do Googleantes do CSS ser baixado (deixa o carregamento da fonte um pouco  mais rápido), e o terceiro link é o que de fato importa o arquivo  CSS com a fonte DM Sans, já pegando a faixa completa de variação  de peso (100 a 1000) que essa fonte suporta.
    
## Header.jsx
Três coisas separadas, deixa eu explicar cada uma:

href={whatsappHref} — é o destino do link. Só que em vez de escrever a URL direto entre aspas (href="https://wa.me/..."), tem chaves {} porque é uma variável JavaScript — a mesma whatsappHref que foi montada lá em cima do componente (juntando o número com a mensagem pré-preenchida). Em JSX, sempre que você quer inserir um valor de JS dentro de um atributo HTML, usa chaves em vez de aspas.

target="_blank" — diz pro navegador abrir esse link numa aba nova, em vez de sair da sua landing page. Faz sentido aqui porque você não quer que a pessoa perca a página do curso só porque clicou no botão de WhatsApp — ela abre o WhatsApp numa aba separada e a landing page continua aberta na aba original.

rel="noopener noreferrer" — é uma questão de segurança que sempre acompanha target="_blank". Sem isso, a aba nova (o WhatsApp, nesse caso) ganha uma referência de volta pra sua página original via JavaScript (window.opener), o que — em teoria — poderia ser explorado por um site malicioso pra manipular a aba de origem. noopener corta essa referência. noreferrer faz algo parecido e também evita que o WhatsApp receba informação de que o clique veio da sua página (cabeçalho de referência). É basicamente um "boas práticas" padrão do mercado: sempre que você usa target="_blank", acompanha com esses dois valores em rel.

## Hero
id="top": é o destino do link "Codi Academy" (logo) no Header, que aponta pra #top — sem esse id na seção certa, aquele link não levaria a lugar nenhum.
order-first md:order-last: no wireframe, você definiu que no mobile o texto vem antes da imagem, mas no desktop a imagem fica ao lado (à direita). Em vez de duplicar o HTML pra cada tela, essas duas classes reordenam visualmente o mesmo bloco — no mobile ele aparece primeiro (mesmo estando depois no código), no desktop ele volta pra última posição (a grid-cols-2 cuida do lado a lado).
A imagem é só um placeholder (bg-gradient-to-br from-primary to-primary-light) — um bloco com gradiente das suas próprias cores de marca, só pra não deixar vazio enquanto você não tem a imagem/ilustração final. Troque por uma tag <img> quando tiver o material.
text-dark/80: o /80 reduz a opacidade da cor dark pra 80% — um recurso do Tailwind pra criar uma variação mais suave da mesma cor (útil pro parágrafo, que não precisa ser tão escuro/pesado quanto o título) sem precisar definir uma cor nova no tema.
O CTA secundário não usa a cor accent como fundo — decidi deixar como contorno neutro que só fica laranja no hover, pra não competir visualmente com o CTA principal (roxo, sólido). Duas cores de destaque com o mesmo peso visual dividem a atenção de quem está vendo a página.