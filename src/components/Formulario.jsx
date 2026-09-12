import { useState } from 'react';
import { SHEETS_WEB_APP_URL } from '../constants/sheets';

const estadoInicial = {
  nome: '',
  telefone: '',
  email: '',
  curso: 'Full Stack',
  aceite: false,
};

export default function Formulario() {
  const [dados, setDados] = useState(estadoInicial);
  const [status, setStatus] = useState('idle'); // idle | enviando | sucesso | erro

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setDados((anterior) => ({
      ...anterior,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('enviando');

    try {
      await fetch(SHEETS_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors', //navegador não vai mostrar a resposta, mas o Apps Script vai receber os dados
        body: JSON.stringify(dados),
      });
      setStatus('sucesso');
      setDados(estadoInicial);
    } catch (erro) {
      setStatus('erro');
    }
  }

  return (
    <section id="formulario" className="bg-white">
      <div className="mx-auto max-w-xl px-6 py-16 md:py-24">
        <h2 className="text-center text-3xl font-bold text-dark md:text-4xl">
          Quer saber mais? Cadastre seus dados
        </h2>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-dark">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              value={dados.nome}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-dark/20 px-4 py-2 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block text-sm font-medium text-dark">
              Telefone / WhatsApp
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              required
              minLength={10}
              value={dados.telefone}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-dark/20 px-4 py-2 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={dados.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-dark/20 px-4 py-2 focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="curso" className="block text-sm font-medium text-dark">
              Curso de interesse
            </label>
            <select
              id="curso"
              name="curso"
              value={dados.curso}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-dark/20 px-4 py-2 focus:border-primary focus:outline-none"
            >
              <option value="Full Stack">Full Stack</option>
            </select>
          </div>

          <label className="flex items-start gap-2 text-sm text-dark/70">
            <input
              type="checkbox"
              name="aceite"
              required
              checked={dados.aceite}
              onChange={handleChange}
              className="mt-1"
            />
            Concordo em ser contatado pela Codi Academy com informações sobre o curso.
          </label>

          <button
            type="submit"
            disabled={status === 'enviando'}
            className="w-full rounded-full bg-primary px-8 py-3 font-medium text-white hover:bg-primary-light transition-colors disabled:opacity-60"
          >
            {status === 'enviando' ? 'Enviando...' : 'Quero receber mais informações'}
          </button>

          {status === 'sucesso' && (
            <p className="text-center text-sm text-green-700">
              Dados enviados com sucesso! Em breve entraremos em contato.
            </p>
          )}
          {status === 'erro' && (
            <p className="text-center text-sm text-red-700">
              Não foi possível enviar. Verifique sua conexão e tente novamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/*
 - "Controlled inputs": cada campo (value={dados.nome} + onChange={handleChange}) é controlado pelo React, não pelo navegador — o valor do campo vive no estado (dados), e cada tecla digitada atualiza esse estado. É o padrão do React pra formulários, e é o que permite resetar tudo de uma vez (setDados(estadoInicial)) depois do envio.
 - handleChange genérico: em vez de escrever uma função onChange separada pra cada um dos 5 campos, essa única função usa o name do input (e.target.name) pra saber qual propriedade do objeto dados atualizar — e trata checkbox diferente de texto (checked em vez de value), porque são propriedades diferentes do DOM.
 - Sobre o status === 'sucesso' sendo "otimista": como expliquei antes, o mode: 'no-cors' impede o navegador de ler a resposta real do Google. Então esse "sucesso" não confirma que a linha realmente foi salva na planilha — só confirma que a requisição saiu do navegador sem erro de rede. Na prática, isso é aceitável pra esse tipo de projeto (é a abordagem padrão de mercado com Apps Script), mas vale você saber que, tecnicamente, não é uma confirmação 100% garantida do lado do servidor.
 - required e minLength nos inputs: essa é a validação "básica" que o RNF06 pedia — o navegador já bloqueia o envio sozinho se um campo obrigatório estiver vazio, se o e-mail não tiver formato de e-mail (type="email" cuida disso nativamente), ou se o telefone tiver menos de 10 caracteres.
 - O checkbox de LGPD (RF09) também tem required — o formulário não deixa enviar sem marcar.
*/