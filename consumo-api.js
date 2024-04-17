document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('form');

    form.addEventListener('submit', async function (event){
        event.preventDefault();

        const idPkmn = document.getElementById('id-pkmn').value;

        try{
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPkmn}`);
            showPokemon(response.data);
            console.log('Repuesta del servidor', response.data);
        }catch(error){
            console.error('Error al encontrar los datos', error);
            alert('Ocurrio un error al buscar al pokemon');
        }
    });
});

function showPokemon(pokemon){
    const descContainer = document.getElementById('desc-pkmn');
    descContainer.innerHTML = `<h2>ID: ${pokemon.id}</h2>
                                <h3>Nombre: ${pokemon.name}</h3>
                                <h4>Tipos: ${pokemon.types[0].type.name} , ${pokemon.types[1].type.name}</h4>
                                <p>Altura:${pokemon.height}</p>
                                <p>Peso: ${pokemon.weight}</p>`;
}
