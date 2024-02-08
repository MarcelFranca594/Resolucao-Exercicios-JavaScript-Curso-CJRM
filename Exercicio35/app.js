/*
  01

  - Implemente uma função que recebe o nome da key de um item da localStorage 
    e retorna o valor da key parseado para objeto javascript.
*/
const myObj = { x: "x", y: "y" };
const myObjAsJson = JSON.stringify(myObj);
localStorage.setItem("myKey", myObjAsJson);

const getLocalStorageItem = (key) => {
  const JsonFrom = localStorage.getItem(key);
  return JSON.parse(JsonFrom);
};

console.log(getLocalStorageItem("myKey"));
