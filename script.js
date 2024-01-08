// "https://pokebuildapi.fr/api/v1/pokemon/limit/100"


const NextButton = document.querySelector('#Next');
const PrevButton = document.querySelector('#Prev');

fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
  .then ((response) => {
    if (!response.ok) {      
      throw new Error(`Erreur ${response.status}`); 
    }
    return response.json();
  })
  .then((data) => {
    let currentIndex = 0;
    console.log(data);

    NextButton.addEventListener('click', handleClickNext);
    PrevButton.addEventListener('click', handleClickPrev);

    function handleClickNext() {
      currentIndex = (currentIndex + 1) % data.length;
      afficherPokemon(currentIndex);
    }

    function handleClickPrev() {
      currentIndex = (currentIndex - 1 + data.length) % data.length;
      afficherPokemon(currentIndex);
    }

    function afficherPokemon(index) {
      const pokemon = data[index];
      document.querySelector('#spritePokemon').src = pokemon.sprite;
      document.querySelector('#nomPokemon').innerText = pokemon.name;
    }
    afficherPokemon(currentIndex);
  })

  .catch((error) => {
    // Gérer les erreurs ici
    console.dir(error.message);
    console.log("Une erreur s'est produite");
  });
