import { useDispatch, useSelector } from "react-redux";
import { selectActiveTypeFilter } from "../../redux/filters/selectors";
import css from "../EquipmentFilter/EquipmentFilter.module.css";
import clsx from "clsx";
import { categoryIcons } from "./../CategoriesList/icons";
import { toggleTypeFilter } from "../../redux/filters/slice";

const TypeFilter = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveTypeFilter);
const filtersArray = [
    { key: "van", icon: categoryIcons.van, label: "Van" },
    { key: "integrated", icon: categoryIcons.integrated, label: "Fully Integrated" },
    { key: "alcove", icon: categoryIcons.alcove, label: "Alcove" },
  ];

  return (
    <div className={css.container}>
      <ul className={css.filtersList}>
        {filtersArray.map(({ key, icon,label }) => {
          return (<li key={key}
          className={clsx({ [css.active]: activeFilter[key] })}
            onClick={() => dispatch(toggleTypeFilter(key))}>
             <svg className={css.icon}>
                            <use href={icon} />
                          </svg>
{label}
          </li>);
        })}
      </ul>
    </div>
  );
};

export default TypeFilter;
