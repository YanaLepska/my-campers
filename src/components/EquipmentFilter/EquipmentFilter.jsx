import css from "./EquipmentFilter.module.css";
import { categoryIcons } from "./../CategoriesList/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../redux/filters/slice";
import { selectActiveFilter } from "../../redux/filters/selectors";
import clsx from "clsx";

const EquipmentFilter = () => {
  const dispatch = useDispatch();
  const activeFilters = useSelector(selectActiveFilter);

  const filtersArray = [
    { key: "ac", icon: categoryIcons.ac, label: "AC" },
    {
      key: "transmission",
      icon: categoryIcons.transmission,
      label: "Automatic",
    },
    { key: "gas", icon: categoryIcons.gas, label: "Gas" },
    { key: "tv", icon: categoryIcons.tv, label: "TV" },
    {
      key: "microwave",
      icon: categoryIcons.microwave,
      label: "Microwave",
    },
    {
      key: "bathroom",
      icon: categoryIcons.shower,
      label: "Bathroom",
    },
  ];

  return (
    <div className={css.container}>
      <ul className={css.filtersList}>
        {filtersArray.map(({ key, icon, label }) => {
          return (
            <li
              key={key}
              className={clsx({ [css.active]: activeFilters[key] })}
              onClick={() => dispatch(toggleFilter(key))}
            >
              <svg className={css.icon}>
                <use href={icon} />
              </svg>
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EquipmentFilter;
