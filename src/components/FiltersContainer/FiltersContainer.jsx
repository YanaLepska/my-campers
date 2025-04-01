import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import css from "./FiltersContainer.module.css";

const FiltersContainer = () => {
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
      <button className={css.filterSearch} type="button">Search</button>
    </div>
  )
}

export default FiltersContainer