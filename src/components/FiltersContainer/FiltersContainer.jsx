import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import LocationFilter from "../LocationFilter/LocationFilter";
import css from "./FiltersContainer.module.css";

const FiltersContainer = () => {
  return (
    <div className={css.fitersContainer}>
      <label className={css.label}>Location</label>
      <LocationFilter />
      <label className={css.label}>Filters</label>
      <div className={css.createLine}>
        <p className={css.filterName}>Vehicle equipment</p>
      </div>
      <EquipmentFilter/>
    </div>
  )
}

export default FiltersContainer