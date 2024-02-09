
function FilterName({ filterName, handleFilterName }) {
    return (
        <>
        <label>
            Busca por personaje
        </label>
        
        <input type="text" placeholder="Ejemplo: Harry Potter" value={filterName} onChange={(ev) => handleFilterName(ev.target.value)} />
        </>

    )
}

export default FilterName;