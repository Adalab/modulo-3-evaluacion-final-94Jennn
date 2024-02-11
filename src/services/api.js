import { saveCharactersToLocalStorage } from "./localStorage";

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
            image: character.image || "https://via.placeholder.com/210x295/a2deaf/?text=Its%20Levi%C3%B3sa,%20No%20Levios%C3%A1",
          };
          return characterData;
        });

        saveCharactersToLocalStorage(dataChar);

        return dataChar;
      });
  };
  
  export default getDataApi;