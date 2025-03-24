import { capitalizeFirstLetter, formatDetails } from "../../function";
import css from "./CategoriesList.module.css";
import { categoryIcons } from "./icons";

const CategoriesList = ({ camper }) => {
  if (!camper) {
    return null;
  }

  return (
    <div>
      <ul className={css.categoriesList}>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.users} />
          </svg>
          {camper.adults} adults
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.engine} />
          </svg>
          {capitalizeFirstLetter(camper.engine)}
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.transmission} />
          </svg>
          {capitalizeFirstLetter(camper.transmission)}
        </li>
        <li>
          <svg className={css.icon}>
            <use href={categoryIcons.ac} />
          </svg>
          AC
        </li>
        {camper.children > 0 && (
          <li>
            <svg className={css.icon}>
              <use href={categoryIcons.users} />
            </svg>{" "}
            {camper.children} children
          </li>
        )}
        {formatDetails(camper.details)}
      </ul>
    </div>
  );
};

export default CategoriesList;
