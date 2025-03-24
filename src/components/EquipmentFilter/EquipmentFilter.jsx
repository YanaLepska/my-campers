// import { capitalizeFirstLetter } from "../../function";
import css from "./EquipmentFilter.module.css";
import { categoryIcons } from "./../CategoriesList/icons";

const EquipmentFilter = () => {
  return (
    <div className={css.container}>
      <ul className={css.filtersList}>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.ac} />
          </svg>
          AC
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.transmission} />
          </svg>
          {/* {capitalizeFirstLetter(camper.transmission)} */}
          Automatic
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.kitchen} />
          </svg>
          Kitchen
        </li>
        <li>
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
          Shower/WC
        </li>
      </ul>
    </div>
  );
};

export default EquipmentFilter;
