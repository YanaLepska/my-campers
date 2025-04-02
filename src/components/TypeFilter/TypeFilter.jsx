import { useDispatch, useSelector } from "react-redux";
import { selectActiveTypeFilter } from "../../redux/filters/selectors";
import css from "../EquipmentFilter/EquipmentFilter.module.css";
import clsx from "clsx";
import { toggleTypeFilter } from "../../redux/filters/slice";

const TypeFilter = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveTypeFilter);
const filtersArray = [
    { key: "van", label: "Van" },
    { key: "integrated", label: "Fully Integrated" },
    { key: "alcove", label: "Alcove" },
  ];

  return (
    <div className={css.container}>
      <ul className={css.filtersList}>
        {filtersArray.map(({ key, label }) => {
          return (<li key={key}
          className={clsx({ [css.active]: activeFilter[key] })}
          onClick={() => dispatch(toggleTypeFilter(key))}>
{label}
          </li>);
        })}
      </ul>
    </div>
  );
};

export default TypeFilter;
