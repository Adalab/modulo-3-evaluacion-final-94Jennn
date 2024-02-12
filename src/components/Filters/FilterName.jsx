
function FilterName({ filterName, handleFilterName }) {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };
    return (
        <>
        <label className="filterContainer__labelName">
            Busca por personaje 
        </label>
        
        <input type="text" placeholder="Ej: Harry Potter" value={filterName} onChange={(ev) => handleFilterName(ev.target.value)} onKeyDown={handleKeyDown} />
        </>

    )
}

export default FilterName;