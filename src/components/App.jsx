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

  const filteredCharacters = filterCharacters(characters, filterName, filterHouse);

  const handleFilterName = (value) => {
    setFilterName(value)
  }

  const handleFilterHouse = (value) => {
    setFilterHouse(value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return <>

      <Header/>
      <div className='filterContainer'>
        <Filters filterName={filterName} handleFilterName={handleFilterName} filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/> 
      </div>

      
      <Routes>
        <Route path="/" element={<CharacterList characters={filteredCharacters} filterName={filterName} filterHouse={filterHouse}/>} />
        {characters.map((character) => (
          <Route key={character.id} path={`/characterDetail/${character.id}`} element={<CharacterDetail character={character} />} />
        ))}
      </Routes>
    </>

}

export default App;