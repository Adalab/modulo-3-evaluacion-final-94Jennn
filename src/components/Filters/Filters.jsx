import FilterHouse from "./FilterHouse";
import FilterName from "./FilterName";

function Filters({ filterName, handleFilterName }) {
    return (
        <form action="">
            <FilterName filterName={filterName} handleFilterName={handleFilterName} />
            <FilterHouse filterHouse={FilterHouse}/>
        </form>
    )
}

export default Filters;