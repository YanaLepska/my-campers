import LocationFilter from "../LocationFilter/LocationFilter";
import css from "./FiltersContainer.module.css";

const FiltersContainer = () => {
  return (
    <div className={css.fitersContainer}>
      <LocationFilter/>
    </div>
  )
}

export default FiltersContainer