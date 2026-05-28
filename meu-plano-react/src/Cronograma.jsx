import React, { useState } from 'react';
import './Cronograma.css';

const cronogramaEstudos = {
  "Segunda-feira": {
    foco: "Lógica e Fundamentos de JS",
    teoria: {
      titulo: "Primitivos vs Referência, Escopo e Closures",
      explicacao: "Primitivos (String, Number, Boolean) são armazenados diretamente na memória por valor. Tipos de Referência (Objects, Arrays) guardam apenas um ponteiro para o endereço de memória. Closures ocorrem quando uma função 'lembra' do seu escopo original, mesmo sendo executada fora dele."
    },
    pratica: [
      ".map(): Transforma um array gerando um novo array de mesmo tamanho.",
      ".filter(): Filtra os elementos com base em uma condição, gerando um array menor ou igual.",
      ".reduce(): Reduz o array inteiro a um único valor (ex: somar tudo, agrupar objetos).",
      ".splice(): Modifica o array original para remover ou substituir elementos em posições específicas."
    ],
    plataforma: "LeetCode",
    passoAPasso: [
      "Acesse o LeetCode e clique na aba 'Problems'.",
      "No filtro lateral, selecione a dificuldade 'Easy'.",
      "Filtre as tags por 'Array' ou 'String' para focar na lógica de hoje.",
      "Escolha problemas clássicos como 'Two Sum' ou 'Contains Duplicate'.",
      "Tente resolver usando loops tradicionais (for/while) ou os métodos de array que estudou.",
      "Se travar por mais de 30 minutos, clique na aba 'Editorial' ou 'Solutions' para entender a lógica de outros programadores."
    ]
  },
  "Terça-feira": {
    foco: "React & Componentização",
    teoria: {
      titulo: "Pensando em React, Estados (State) e Props",
      explicacao: "No React, a interface é reativa. Props são propriedades imutáveis passadas de pai para filho (como argumentos de uma função). State é a memória do componente; quando o estado muda, o React re-renderiza o componente na tela de forma otimizada usando o Virtual DOM."
    },
    pratica: [
      "Criar componentes funcionais isolados e reutilizáveis.",
      "Usar o hook useState para capturar cliques de botões ou textos de inputs.",
      "Usar o hook useEffect para monitorar mudanças de variáveis ou disparar ações automáticas.",
      "Passar funções via props para que componentes filhos consigam atualizar o estado do pai."
    ],
    plataforma: "Dribbble",
    passoAPasso: [
      "Acesse o Dribbble.com e pesquise por 'Web UI Component' ou 'Dashboard Card'.",
      "Escolha um design visualmente bonito, mas simples (ex: um card de perfil ou player de música).",
      "No seu VS Code, crie um componente React isolado para esse design.",
      "Use estados (useState) para dar vida ao design (ex: mudar a cor ao clicar no botão de 'Like', abrir um modal).",
      "Não se preocupe com o back-end, foque em deixar o visual idêntico e interativo usando CSS e React."
    ]
  },
  "Quarta-feira": {
    foco: "Bancos de Dados (Relacional & OLAP)",
    teoria: {
      titulo: "Modelagem OLTP vs OLAP, Fatos e Dimensões",
      explicacao: "Bancos relacionais comuns (MySQL) são OLTP (focados em transações rápidas do dia a dia). Já ambientes OLAP são focados em análise de dados em massa (Data Warehouses). Tabelas Fato guardam os acontecimentos (ex: vendas, acessos) com métricas numéricas. Tabelas Dimensão guardam o contexto (ex: dados do cliente, produtos, tempo)."
    },
    pratica: [
      "INNER, LEFT e RIGHT JOINs para cruzar tabelas de dimensões com tabelas fato.",
      "GROUP BY e HAVING para criar relatórios consolidados (ex: faturamento por mês).",
      "Window Functions (ROW_NUMBER(), RANK(), SUM() OVER) para análises avançadas sem agrupar as linhas."
    ],
    plataforma: "HackerRank",
    passoAPasso: [
      "Entre no HackerRank e navegue até a seção 'Prepare > SQL'.",
      "Filtre as questões por dificuldade 'Easy' e depois avance para 'Medium'.",
      "Comece focando na categoria 'Basic Join' e depois 'Aggregation'.",
      "Escreva as queries direto no terminal da plataforma.",
      "Fique atento aos detalhes: o HackerRank exige que o nome das colunas de saída seja idêntico ao pedido no enunciado."
    ]
  },
  "Quinta-feira": {
    foco: "Git, Integração e Projetos",
    teoria: {
      titulo: "Fluxo de Trabalho de Mercado (Git Flow)",
      explicacao: "Em empresas, você nunca mexe na branch 'main/master' diretamente. Criamos ramificações (branches) para cada nova funcionalidade (feature branches). Quando terminamos, enviamos essa branch para o GitHub e abrimos um Pull Request (PR) para que outros desenvolvedores revisem o código antes de juntá-lo à branch principal."
    },
    pratica: [
      "Criar novas branches usando git checkout -b nome-da-branch.",
      "Simular conflitos de código alterando a mesma linha em duas branches diferentes.",
      "Resolver os conflitos diretamente no VS Code e commitar a solução.",
      "Praticar o uso do git log --oneline para entender o histórico de forma limpa."
    ],
    plataforma: "GitHub (Git Bash)",
    passoAPasso: [
      "Abra o Git Bash na pasta do projeto que você trabalhou na terça ou quarta.",
      "Crie uma nova branch chamada 'feature/melhorias-layout'.",
      "Faça uma pequena alteração no código.",
      "Rode o fluxo: git add . -> git commit -m 'feat: melhorando o visual do painel'.",
      "Envie essa branch específica para o GitHub: git push origin feature/melhorias-layout.",
      "Abra o seu GitHub no navegador, vá até o repositório e clique no botão verde 'Compare & Pull Request' para simular o processo de entrega de uma tarefa em uma empresa."
    ]
  },
  "Sexta-feira": {
    foco: "Simulado de Entrevista & Engenharia Reversa",
    teoria: {
      titulo: "O Processo de Live Coding e System Design",
      explicacao: "Entrevistas técnicas testam três coisas: sua lógica de resolução de problemas, sua capacidade de se comunicação sob pressão (falar enquanto pensa) e a otimização do seu código (Complexidade de Tempo e Espaço - Big O Notation)."
    },
    pratica: [
      "Estudar o algoritmo de Busca Binária (Binary Search) e entender por que ele é mais rápido que um loop simples.",
      "Praticar a explicação do seu código em voz alta enquanto digita.",
      "Analisar códigos antigos seus e pensar: 'Como eu faria isso rodar com menos linhas ou consumindo menos memória?'"
    ],
    plataforma: "GeeksforGeeks & HackerEarth",
    passoAPasso: [
      "Abra o GeeksforGeeks e pesquise por 'Top 20 Array Coding Questions for Interviews'. Escolha uma e leia a explicação teórica dela.",
      "Vá para o HackerEarth na aba 'Hackathons' ou 'Challenges' para ver o nível de testes reais de empresas.",
      "Escolha um desafio de código, ligue um cronômetro no celular para 45 minutos (tempo padrão de entrevista).",
      "Tente resolver o problema explicando para si mesma em voz alta o que cada linha de código está fazendo.",
      "Se o tempo acabar e não conseguir, passe o restante do tempo lendo a resposta e reescrevendo-a para fixar a lógica."
    ]
  }
};

export default function App() {
  const [diaSelecionado, setDiaSelecionado] = useState("Segunda-feira");
  const [abaAtiva, setAbaAtiva] = useState("teoria");

  const dadosDoDia = cronogramaEstudos[diaSelecionado];
  const diasDaSemana = Object.keys(cronogramaEstudos);

  return (
    <div className="container">
      <h1>📅 Plano de Estudos Interativo</h1>
      
      {/* Menu de Navegação Superior (Dias) */}
      <nav className="navegacao-dias">
        {diasDaSemana.map((dia) => (
          <button 
            key={dia} 
            className={`btn-dia ${diaSelecionado === dia ? 'ativo' : ''}`}
            onClick={() => {
              console.log("Dia alterado para:", dia); // Verifique se isso roda no F12
              setDiaSelecionado(dia);
            }}
          >
            {dia.split('-')[0]}
          </button>
        ))}
      </nav>

      {/* Painel Principal */}
      <div className="painel-estudo">
        <h2>{diaSelecionado}</h2>
        <div className="badge-foco"><strong>🎯 Foco Principal:</strong> {dadosDoDia.foco}</div>
        
        {/* Menu de Abas Internas */}
        <div className="menu-abas">
          <button 
            className={`btn-aba ${abaAtiva === 'teoria' ? 'aba-ativa' : ''}`}
            onClick={() => setAbaAtiva('teoria')}
          >
            📚 Teoria Relevante
          </button>
          <button 
            className={`btn-aba ${abaAtiva === 'pratica' ? 'aba-ativa' : ''}`}
            onClick={() => setAbaAtiva('pratica')}
          >
            💻 Roteiro Prático
          </button>
          <button 
            className={`btn-aba ${abaAtiva === 'plataforma' ? 'aba-ativa' : ''}`}
            onClick={() => setAbaAtiva('plataforma')}
          >
            🚀 Guia {dadosDoDia.plataforma}
          </button>
        </div>

        {/* Conteúdo Dinâmico Baseado na Aba Ativa */}
        <div className="conteudo-aba-dinamico">
          {abaAtiva === 'teoria' && (
            <div className="conteudo-secao card-teoria">
              <h3>{dadosDoDia.teoria.titulo}</h3>
              <p className="texto-explicativo">{dadosDoDia.teoria.explicacao}</p>
            </div>
          )}

          {abaAtiva === 'pratica' && (
            <div className="conteudo-secao">
              <h3>O que implementar no código hoje:</h3>
              <ul className="lista-pratica">
                {dadosDoDia.pratica.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {abaAtiva === 'plataforma' && (
            <div className="alerta-plataforma">
              <h3>Passo a Passo no <span className="nome-plataforma">{dadosDoDia.plataforma}</span>:</h3>
              <ol className="lista-passos">
                {dadosDoDia.passoAPasso.map((passo, index) => (
                  <li key={index}>{passo}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}