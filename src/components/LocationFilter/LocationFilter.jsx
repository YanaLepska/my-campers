import css from "./LocationFilter.module.css";
import icons from "../../../public/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors";
import { formatLocation } from "../../function";
import { selectLocationFilter } from "../../redux/filters/selectors";
import { setLocationFilter } from "../../redux/filters/slice";

const LocationFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectLocationFilter);
  const allCampers = useSelector(selectCampers);
  const camperCities = allCampers.map((camper) =>
    formatLocation(camper.location)
  );

  const handleFilterChange = (e) => {
    dispatch(setLocationFilter(e.target.value));
  };

  const uniqCities = ["All towns", ...new Set(camperCities)].toSorted();

  return (
    <div className={css.selectWrapper}>
      <svg
        className={css.icon}
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        stroke="#101828"
      >
        <use href={`${icons}#map-pin`} />
      </svg>

      <select
        className={css.selectCity}
        value={filter}
        onChange={handleFilterChange}
      >
        {uniqCities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationFilter;
