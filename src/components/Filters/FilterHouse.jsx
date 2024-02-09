
function FilterHouse( {filterHouse, handleFilterHouse}) {
  const handleChange = (event) => {
    handleFilterHouse(event.target.value);
  };
  
  return (
    <>
        <label className="filterContainer__labelHouse">
            Selecciona la casa
        </label>

        <select value={filterHouse} onChange={handleChange}>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
        </select>
    
    </>
  )
}

export default FilterHouse;