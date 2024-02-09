import '../scss/App.scss';
import Filters from './Filters/Filters';
import { useEffect, useState } from "react";
import getDataApi from '../services/api';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  //Llamada a la api: 
  useEffect(() => {
    getDataApi().then((dataChar) => {
      setCharacters(dataChar)
    })
  }, [])

  //función Filtro del Nombre:
  const handleFilterName = (value) => {
    setFilterName(value)
  }

  //función Filtro por Casa:
  const handleFilterHouse = () => {
    setFilterHouse()
  }


  return (
    <div>
      <h1 className='title'>Mapa del Merodeador</h1>
      <div className='filterContainer'>
        <Filters 
        filterName={filterName} handleFilterName={handleFilterName} 
        filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/> 
      </div>
      <div>
        {/* Mostrar personajes aquí */}
        {characters.map(character => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <p> {character.name}</p>
            <p> {character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;