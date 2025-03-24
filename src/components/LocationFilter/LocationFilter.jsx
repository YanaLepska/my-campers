import css from "./LocationFilter.module.css";
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

   const uniqCities = ["All", ...new Set(camperCities)].toSorted();
 
  return (
    <div className={css.selectWrapper}>
      <p className={css.label}>Location</p>
      <svg
        className={css.icon}
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"

      >
        <g clipPath="url(#clip0_45_248)">
          <path
            d="M16.5 8.33333C16.5 14.1667 9 19.1667 9 19.1667C9 19.1667 1.5 14.1667 1.5 8.33333C1.5 6.34421 2.29018 4.43655 3.6967 3.03003C5.10322 1.6235 7.01088 0.833328 9 0.833328C10.9891 0.833328 12.8968 1.6235 14.3033 3.03003C15.7098 4.43655 16.5 6.34421 16.5 8.33333Z"
            stroke="#101828"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 10.8333C10.3807 10.8333 11.5 9.71404 11.5 8.33333C11.5 6.95262 10.3807 5.83333 9 5.83333C7.61929 5.83333 6.5 6.95262 6.5 8.33333C6.5 9.71404 7.61929 10.8333 9 10.8333Z"
            stroke="#101828"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_45_248">
            <rect width="18" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <select className={css.selectCity} value={filter} onChange={handleFilterChange}>
        {uniqCities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default LocationFilter;
