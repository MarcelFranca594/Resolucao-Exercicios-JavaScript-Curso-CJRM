/*
  01

  - Descomente a let abaixo, descubra o que o código está tentando fazer e 
    faça-o funcionar.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
    this.created = new Date();
  }
}

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit);

/*
  02

  - Descomente o código abaixo e implemente o que está faltando para que ele 
    funcione.
*/

class Counter {
  constructor() {
    this.valorAtual = 0;
  }
  getValue() {
    return this.valorAtual;
  }

  increment() {
    this.valorAtual++;
  }
}

const counter = new Counter();

console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

/*
  03

  - A partir do array abaixo, gere um novo array com apenas os valores truthy;
  - Utilize um construtor para resolver este exercício;
  - Não invoque o construtor.
*/

const values = [0, {}, "", [], NaN, () => {}];
const truthyValues = values.filter(Boolean);
console.log(truthyValues);

/*
  04

  - O código abaixo deveria exibir no console, à cada segundo, uma string com 
    as horas minutos e segundos, no seguinte formato: "h:m:s" onde "h" 
    representa as horas, "m" os minutos e "s" os segundos. Exemplo: "22:01:25";
  - Descomente o código e conserte os erros que estão impedindo que ele 
    funcione.
*/

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMonth();
    let seconds = date.getSeconds();

    if (hours < 10) {
      hours = `0${hours}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    const formattedTime = this.template
      .replace("h", hours)
      .replace("m", minutes)
      .replace("s", seconds);

    console.log(formattedTime);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);

    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

const clock = new ExtendedClock({ template: "h:m:s", precision: 1000 });

clock.start();
