export const saveCharactersToLocalStorage = (characters) => {
    const dataJson = JSON.stringify(characters);
    localStorage.setItem('characters', dataJson);
  }
  
export const loadCharactersFromLocalStorage = () => {
    const dataJson = localStorage.getItem('characters');
    if (dataJson) {
      return JSON.parse(dataJson);
    } else {
      return [];
    }
  }
