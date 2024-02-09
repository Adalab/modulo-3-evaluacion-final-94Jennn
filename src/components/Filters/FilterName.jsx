
function FilterName({ filterName, handleFilterName }) {
    return (
        <>
        <label className="filterContainer__labelName">
            Busca por personaje 
        </label>
        
        <input type="text" placeholder="Ej: Harry Potter" value={filterName} onChange={(ev) => handleFilterName(ev.target.value)} />
        </>

    )
}

export default FilterName;