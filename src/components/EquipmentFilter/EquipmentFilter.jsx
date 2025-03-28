import css from "./EquipmentFilter.module.css";
import { categoryIcons } from "./../CategoriesList/icons";
import { useDispatch, useSelector } from "react-redux";
import { setTransmissionFilter, setTVFilter } from "../../redux/filters/slice";
import {
  selectTransmissionFilter,
  selectTVFilter,
} from "../../redux/filters/selectors";

const EquipmentFilter = () => {
  const dispatch = useDispatch();
  const filterTransmission = useSelector(selectTransmissionFilter);
  const filterTV = useSelector(selectTVFilter);

  return (
    <div className={css.container}>
      <ul className={css.filtersList}>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.ac} />
          </svg>
          AC
        </li>
        <li
          onClick={() =>
            dispatch(setTransmissionFilter(filterTransmission ? false : true))
          }
        >
          <svg className={css.icon}>
            <use href={categoryIcons.transmission} />
          </svg>
          Automatic
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.kitchen} />
          </svg>
          Kitchen
        </li>
        <li onClick={() => dispatch(setTVFilter(filterTV ? false : true))}>
          <svg className={css.icon}>
            <use href={categoryIcons.tv} />
          </svg>
          TV
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.microwave} />
          </svg>
          Microwave
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.shower} />
          </svg>
          Bathroom
        </li>
      </ul>
    </div>
  );
};

export default EquipmentFilter;
