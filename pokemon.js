//Função para encontrar o pokemon

async function fetchPokemon(){
    //Url da api
    const url = "https://pokeapi.co/api/v2/pokemon/"
    //Bloco de try e catch para lidar melhor com erros
    try{
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response = await fetch(url+pokemonName);

        //Verificar se a resposta do servidor está ok
        if (!response.ok){
            throw new Error("Não foi possível dar fetch");
        }

        //Transformar as informações em json
        const data = await response.json()

        //Obter a imagem do pokémon
        const pokemonSprite = data.sprites.front_default;

        //obter o campo da imagem
        const pokemonImg = document.getElementById("pokemonImg");

        //colocar a imagem
        pokemonImg.setAttribute("src", pokemonSprite);
        
    } catch (error) {
        //Mostrar o erro
        console.error("Erro encontrado:" + error)

    }
}