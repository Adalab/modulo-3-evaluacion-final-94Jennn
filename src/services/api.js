const getDataApi = () => {
    return fetch('https://hp-api.onrender.com/api/characters/')
      .then((response) => response.json())
      .then((data) => {
        const dataChar = data.map((character) => {
          const characterData = {
            id: character.id,
            name: character.name,
            species: character.species,
            gender: character.gender,
            house: character.house,
            alive: character.alive,
            image: character.image,
          };
          return characterData;
        });
        return dataChar;
      });
  };
  
  export default getDataApi;