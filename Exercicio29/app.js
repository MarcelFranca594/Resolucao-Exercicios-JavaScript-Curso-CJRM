/*
  01

  - Faça requests para a https://pokeapi.co/, da seguinte forma:
    - Encapsule o código do request em uma função que recebe os parâmetros 
      "url" e "callback";
    - Se o request estiver ok, exiba no console 'Pokémon obtido: 
      NOME_DO_POKEMON';
    - Se o request não estiver ok, exiba no console 'Não foi possível obter o 
      Pokémon';
    - Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
    - Os requests devem ser sequenciais. Ou seja, um request só deve ser 
      executado quando o request anterior for finalizado.
*/

const getPokemon = (url, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    const isRequestOk = request.readyState === 4 && request.status === 200;
    const isRequestNotOk = request.readyState === 4;

    if (isRequestOk) {
      const data = JSON.parse(request.responseText);
      callback(null, data);
      return;
    }
    /*
  
  */
    if (isRequestNotOk) {
      callback("Não foi possível obter o Pokémon", null);
    }
  });

  request.open("GET", url);
  request.send();
};

const logPokemonDate = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Pokémon obtido: ${data.name}`);
};

getPokemon("https://pokeapi.co/api/v2/pokemon/1", (error, data) => {
  logPokemonDate(error, data);
  getPokemon("https://pokeapi.co/api/v2/pokemon/4", (error, data) => {
    logPokemonDate(error, data);
    getPokemon("https://pokeapi.co/api/v2/pokemon/7", logPokemonDate);
  });
});
