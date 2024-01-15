/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.

04

  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.

 05

  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a  
    alternativa correta das perguntas não seja apenas a alternativa "B".



  06

  - Refatore o código.
  
  Dicas: 
    - Primeiro, quebre o código da função de callback de envio do form em  
      funções isoladas;
    - Depois, cuide da legibilidade das funções.

*/
const form = document.querySelector(".quiz-form");
const arraysRespostas = ["A", "B", "C", "B"];
const pontuacaoScore = document.querySelector("#pontuacao");

let score = 0;

const getUserAnswers = () => {
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  return userAnswers;
};

const calculateUserScore = (userAnswers) => {
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === arraysRespostas[index]) {
      score += 25;
    }
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // obtém as resposta do usuário
  const userAnswer = getUserAnswers();

  //calcula a pontuação do usuário
  calculateUserScore(userAnswer);

  pontuacaoScore.innerHTML = `Pontuação: ${score}`;
  //console.log(score);
});
