import { useDispatch } from "react-redux";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import css from "./FiltersContainer.module.css";
import { applyFilters, resetFilters } from "../../redux/filters/slice";

const FiltersContainer = () => {
    const dispatch = useDispatch();
  const handleSearch = () => {
    dispatch(applyFilters());
  };
    const handleReset = () => {
    dispatch(resetFilters());
  };
  return (
    <div className={css.fitersContainer}>
      <p className={css.label}>Location</p>
      <LocationFilter />
      <p className={css.label}>Filters</p>
      <div className={css.createLine}>
        <p className={css.filterName}>Vehicle equipment</p>
      </div>
      <EquipmentFilter />
      <div className={css.createLine}>
      <p className={css.filterName}>Vehicle type</p>
      </div>
      <TypeFilter />
      <button className={css.filterSearch} type="button" onClick={handleSearch}>Apply</button>
      <button className={css.filterReset} type="button" onClick={handleReset}>Reset</button>
    
    </div>
  )
}

export default FiltersContainer