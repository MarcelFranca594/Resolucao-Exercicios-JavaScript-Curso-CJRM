/*
  01

  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/

const getUsers = (url) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      const isRequestOk = request.readyState === 4 && request.status === 200;
      const isRequestNotOk = request.readyState === 4;

      if (isRequestOk) {
        /*
      Converte o JSON em um Array de objetos em JS

      const data = JSON.parse(request.responseText);
      callback(null, data); // Foi bem sucedido
      return;
      */
        const data = JSON.parse(request.responseText);
        resolve(data); // Foi bem sucedido
      }

      if (isRequestNotOk) {
        reject("Não foi possível obter os dados"); // Mal sucedido
      }
    });

    request.open("GET", url);
    request.send();
  });

getUsers("https://jsonplaceholder.typicode.com/users")
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
