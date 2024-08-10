import { capitalizeFirstLetter, formatKey } from "../../function";
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
        {Object.entries(camper.details)
          .filter(([key, value]) => value > 0)
          .map(([key, value]) => (
              <li key={key}>
                  <svg className={css.icon}>
                <use href={categoryIcons[key.toLowerCase()]} />
              </svg>
              {key.toLowerCase() === "airconditioner" ? (
                <>
                  {value} {formatKey(key)}
                </>
              ) : value === 1 ? (
                <>{formatKey(key)}</>
              ) : (
                <>
                  {value} {key}
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
