const pokemonSelect = document.getElementById("pokemonSelect");
const pokemonDetail = document.getElementById("pokemon-detail");

// Recoleccion de datos nombre pokemones y url
async function pokeApp() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=110&limit=100");
    const data = await response.json();
    pokemonNameList(data.results);
    // console.log (data)
  } catch {
    console.log();
  }
}
pokeApp();

// Dropdown con nombres
function pokemonNameList(data) {
  pokemonSelect.innerHTML = `
    <option> Choose a Pokemon </option>
    ${data.map(pokemon => `<option value="${pokemon.url}">${pokemon.name}</option>`).join('')}
  `;
}

//  Event listener
  pokemonSelect.addEventListener ('click', function() {
    const pokemonNumber = pokemonSelect.value;
    // console.log(pokemonNumber)
    getPokemonInfo(pokemonNumber)
  });


//Caracteristicas de los pokemones
async function getPokemonInfo(pokemonApi) {
  try {
    const response = await fetch(pokemonApi); 
    const data = await response.json();
    showPokemonDetails(data)
    console.log(data)
  } catch (error) {
    console.log("error"); 
  }
}

getPokemonInfo();

function showPokemonDetails (data) {
  pokemonDetail.innerHTML = 
  `
<div class="pokemon">
  <h2>${data.name}</h2>
    <img class="pokemon__image" src="${data.sprites.other["official-artwork"].front_default}" alt="">
  <div class="pokemon__info">
      <p>Height: ${data.height} </p>
      <p>Weight: ${data.weight} </p>
      <h2>Habilidades</h2>
      <p>${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
  </div>
</div>
`
};