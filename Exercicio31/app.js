/*
  01

  - Utilizando a fetch API, implemente uma função assíncrona que busca dados do 
    seu perfil de usuário no GitHub, através do seguinte endpoint:
    - https://api.github.com/users/SEU_NOME_DE_USUARIO_NO_GITHUB
  - Implemente uma segunda função que exibe, no console, seus dados de usuário 
    do GitHub.
*/

const fetchGitHubUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
};

const loginGitHub = async (username) =>
  console.log(await fetchGitHubUser(username));

loginGitHub("MarcelFranca594");
