//Usar o fetch api para pegar respostas de uma API
//Usar uma função assíncrona para pegar as informações e manipular elas
//Pequeno teste de API

const URL = "https://pokeapi.co/api/v2/pokemon/raichu"

fetch(URL)
    .then(
        response => {
            //Verificar se está tudo certo com a resposta 
            if (!response.ok){
                //Cria um novo erro para ser exibido durante o catch
                throw new Error("Não foi possível consumir essa API");
            }
            //Pega o resultado e deixa em json para ser enviado ao próximo then
        return response.json();
        }
    )
    .then( data => console.log(data
    ))
    .catch(
        error => console.log(error)
    )