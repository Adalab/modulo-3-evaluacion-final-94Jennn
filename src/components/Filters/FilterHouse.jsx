
function FilterHouse( {filterHouse}) {
  return (
    <>
        <label className="filterContainer__label">
            Selecciona la casa
        </label>

        <select>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
        </select>
    
    </>
  )
}

export default FilterHouse;