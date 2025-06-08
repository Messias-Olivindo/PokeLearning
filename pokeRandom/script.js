//Função para facilitar a criação de elementos no html
function createNode(element) {
    return document.createElement(element);
}

//Função para facilitar a inserção de uma tag html dentro de outra tag html
function append(parent, el) {
    return parent.appendChild(el);
}

//Elemento html com o id de pokemon, para inserir as informações nela
const ul = document.getElementById("pokemons");
//url com a api com resultado de 10 pokémons aleatórios
const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';

//Consumir a API com fetch API
fetch(url)
    //Transformar a resposta em json
    .then((response) => { return response.json() })
    //Realizar as ações com a resposta em json
    .then( (data) => {
        //colocar as informações obtidas em uma variável que será um array
        let pokemons = data.results;

        //Retornará as informações de acordo com o número obtido do resultado
        return pokemons.map( (pokemon) => {
            //Criar a tag de um ponto na lista não ordenada
            let li = createNode('li');
            //Criar uma tag de imagem
            let img = createNode('img');
            //Criar uma tag span
            let span = createNode('span');

            //Colocar as informações nas tags
            //Texto no span
            span.innerHTML = `Pokémon: ${pokemon.name}`;
           //Realiizar outro fetch para acessar as imagens
            fetch(pokemon.url)
                .then((response)=> { return response.json()})
                .then((data) =>{
                    img.src= data.sprites.front_default;
                })
                .catch( (error) => {
                    console.log("Erro para encontrar uma imagem: " + error)
                });
            
            
            //Inserir as informações na tag
            //imagem
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch( (error) => {
        console.log('Erro encontrado:'+error);
    });