import '../scss/App.scss';
import Filters from './Filters/Filters';
import { useState } from "react";

function App() {
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  
  const handleFilterName = (value) => {
    setFilterName(value)
  }



  return (
    <div>
      <h1 className='title'>Mapa del Merodeador</h1>
      <div className='filterContainer'>
        <Filters filterName={filterName} handleFilterName={handleFilterName} filterHouse={filterHouse}/> 
      </div>
    </div>
  );
}

export default App;