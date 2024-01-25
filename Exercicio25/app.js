/*
  01

  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const indexFev = months.indexOf("Fevereiro");
console.log(indexFev);

/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/

const present = new Date();
console.log(present);

/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/

console.log("Ano Atual:", present.getFullYear());

/*
  04

  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/

const past = new Date("January 17 2020 21:17:00");
console.log(past);

/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/

console.log(past.getHours());

/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/

const future = new Date("May 4 2021 00:00:00");
console.log(future);

/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/

const qtdeDias = future.getTime() - past.getTime();
const difference = Math.round(qtdeDias / 1000 / 60 / 60 / 24);
console.log(difference);
