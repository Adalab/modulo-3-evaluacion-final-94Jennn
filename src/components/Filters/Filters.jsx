import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

function Filters({ filterName, handleFilterName, filterHouse, handleFilterHouse }) {
    return (
        <form action="">
            <FilterName filterName={filterName} handleFilterName={handleFilterName} />
            <FilterHouse filterHouse={filterHouse} handleFilterHouse={handleFilterHouse}/>
        </form>
    )
}

export default Filters;