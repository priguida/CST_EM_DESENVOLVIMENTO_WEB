// Variáveis para armazenar as perguntas e respostas
var perguntas = [
    {
      pergunta: "Qual é a capital do Brasil?",
      respostas: [
        "São Paulo",
        "Rio de Janeiro",
        "Brasília"
      ],
      respostaCorreta: 2, // Índice da resposta correta no array
    },
    {
      pergunta: "Qual é o nome do presidente do Brasil?",
      respostas: [
        "Jair Bolsonaro",
        "Fernando Henrique Cardoso",
        "Luiz Inácio Lula da Silva"
      ],
      respostaCorreta: 2,
    },
    {
      pergunta: "Qual é a data da independência do Brasil?",
      respostas: [
        "7 de setembro de 1822",
        "15 de novembro de 1889",
        "3 de maio de 1500"
      ],
      respostaCorreta: 0,
    },
    {
      pergunta: "Qual é a moeda do Brasil?",
      respostas: [
        "Dólar",
        "Euro",
        "Real"
      ],
      respostaCorreta: 2,
    },
  ];
  
  var perguntaAtual = 0; // Índice da pergunta atual
  var acertos = 0; // Inicializa o número de acertos
  var erros = 0; // Inicializa o número de erros
  
  // Função para exibir a pergunta atual
  function exibirPergunta() {
    if (perguntaAtual < perguntas.length) {
      var pergunta = perguntas[perguntaAtual];
      document.getElementById("pergunta").innerHTML = pergunta.pergunta;
      
      var respostasHTML = "";
      for (var i = 0; i < pergunta.respostas.length; i++) {
        respostasHTML += "<input type='radio' name='resposta' value='" + i + "'>" + pergunta.respostas[i] + "<br>";
      }
      document.getElementById("respostas").innerHTML = respostasHTML;
    } else {
      // Todas as perguntas foram respondidas
      alert("Fim do jogo!\nAcertos: " + acertos + "\nErros: " + erros);
      perguntaAtual = 0; // Reiniciar o jogo
      acertos = 0; // Reiniciar o número de acertos
      erros = 0; // Reiniciar o número de erros
      exibirPergunta();
    }
  }
  
  // Função para verificar a resposta do usuário
  function verificarResposta() {
    var respostaSelecionada = document.querySelector("input[name='resposta']:checked");
  
    if (respostaSelecionada) {
      respostaSelecionada = parseInt(respostaSelecionada.value);
  
      if (respostaSelecionada === perguntas[perguntaAtual].respostaCorreta) {
        // Resposta correta
        alert("Resposta correta!");
        acertos++; // Incrementa o número de acertos
      } else {
        // Resposta incorreta
        alert("Resposta incorreta!");
        erros++; // Incrementa o número de erros
      }
  
      // Avançar para a próxima pergunta
      perguntaAtual++;
      exibirPergunta();
    } else {
      alert("Selecione uma resposta antes de enviar.");
    }
  }
  
  // Evento de clique no botão
  document.querySelector("#botao button").addEventListener("click", verificarResposta);
  
  // Inicializar o jogo exibindo a primeira pergunta
  exibirPergunta();
