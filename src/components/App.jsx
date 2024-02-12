import '../scss/App.scss';
import { Route, Routes } from "react-router-dom";
import Filters from './Filters/Filters';
import { useEffect, useState } from "react";
import getDataApi from '../services/api';
import CharacterList from './Characters/CharacterList';
import CharacterDetail from './Characters/CharacterDetail';
import Header from './Header';



function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");
  const [idClicked, setidClicked] = useState(0);
  //Llamada a la api: 
  useEffect(() => {
    getDataApi().then((dataChar) => {
      setCharacters(dataChar);
      setLoading(false);
      const savedCharacters = loadCharactersFromLocalStorage();
      setCharacters(savedCharacters);
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

  //función para hacer click sobre personaje:
  const handleClickCharacter = (value) => {
    const { id } = useParams();
    const character = characters.find((character) => character.id === parseInt(id));
    setidClicked(value)
  }


  return <>

      <Header/>
      <div className='filterContainer'>
        <Filters filterName={filterName} handleFilterName={handleFilterName} filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/> 
      </div>

      
      <Routes>
        <Route path="/" element={<CharacterList characters={filteredCharacters} />} />
        <Route path='/characterDetail/:id' element={<CharacterDetail characters={handleClickCharacter}/>} />
      </Routes>
    </>

}

export default App;