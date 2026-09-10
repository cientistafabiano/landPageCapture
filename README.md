## HTML
os dois preconnect adiantam a conexão com os servidores do Googleantes do CSS ser baixado (deixa o carregamento da fonte um pouco  mais rápido), e o terceiro link é o que de fato importa o arquivo  CSS com a fonte DM Sans, já pegando a faixa completa de variação  de peso (100 a 1000) que essa fonte suporta.
    
## Header.jsx
Três coisas separadas, deixa eu explicar cada uma:

href={whatsappHref} — é o destino do link. Só que em vez de escrever a URL direto entre aspas (href="https://wa.me/..."), tem chaves {} porque é uma variável JavaScript — a mesma whatsappHref que foi montada lá em cima do componente (juntando o número com a mensagem pré-preenchida). Em JSX, sempre que você quer inserir um valor de JS dentro de um atributo HTML, usa chaves em vez de aspas.

target="_blank" — diz pro navegador abrir esse link numa aba nova, em vez de sair da sua landing page. Faz sentido aqui porque você não quer que a pessoa perca a página do curso só porque clicou no botão de WhatsApp — ela abre o WhatsApp numa aba separada e a landing page continua aberta na aba original.

rel="noopener noreferrer" — é uma questão de segurança que sempre acompanha target="_blank". Sem isso, a aba nova (o WhatsApp, nesse caso) ganha uma referência de volta pra sua página original via JavaScript (window.opener), o que — em teoria — poderia ser explorado por um site malicioso pra manipular a aba de origem. noopener corta essa referência. noreferrer faz algo parecido e também evita que o WhatsApp receba informação de que o clique veio da sua página (cabeçalho de referência). É basicamente um "boas práticas" padrão do mercado: sempre que você usa target="_blank", acompanha com esses dois valores em rel.

