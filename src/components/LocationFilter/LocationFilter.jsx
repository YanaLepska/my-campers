import css from "./LocationFilter.module.css";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import { formatLocation } from "../../function";

const LocationFilter = () => {
  const allCampers = useSelector(selectCampers);
  const camperCities = allCampers.map((camper) =>
    formatLocation(camper.location)
  );
  const uniqCities = [...new Set(camperCities)].toSorted();
  return (
    <div>
      <p className={css.label}>Location</p>
      <select className={css.selectCity}>
        {uniqCities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default LocationFilter;
