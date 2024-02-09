import '../scss/App.scss';
import Filters from './Filters/Filters';
import { useEffect, useState } from "react";
import getDataApi from '../services/api';
import CharacterList from './Characters/CharacterList';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  
  //Llamada a la api: 
  useEffect(() => {
    getDataApi().then((dataChar) => {
      setCharacters(dataChar);
    })
  }, [])

  const filterCharacters = (characters, filterName, filterHouse) => {
    return characters.filter(character => 
      character.name.toLowerCase().includes(filterName.toLowerCase()) && 
      character.house === filterHouse);
  }

  //Variable de Filtrado de personajes:
  const filteredCharacters = filterCharacters(characters, filterName, filterHouse);

  //función Filtro del Nombre:
  const handleFilterName = (value) => {
    setFilterName(value)
  }
  

  //función Filtro por Casa:
  const handleFilterHouse = (value) => {
    setFilterHouse(value)
  }


  return (
    <div>
      <h1 className='title'>Mapa del Merodeador</h1>
      <div className='filterContainer'>
        <Filters 
        filterName={filterName} handleFilterName={handleFilterName} 
        filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/> 
      </div>
      <CharacterList characters={filteredCharacters}/>
    </div>
  );
}

export default App;