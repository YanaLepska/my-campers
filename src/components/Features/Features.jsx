import css from "./Features.module.css";
import { capitalizeFirstLetter, formatKey } from "../../function";
import { categoryIcons } from "../CategoriesList/icons";
import SendForm from "../SendForm/SendForm";

const Features = ({ camper }) => {
  if (!camper) {
    return <p>No camper data available</p>;
  }
  
  return (
    <div className={css.featuresBox}>
      <div>  <ul className={css.categoriesListFeatures}>
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
      
      <div className={css.vehicleDetails}>
        <p className={css.vehicleDetailsTitle}>Vehicle details</p>
        <ul className={css.details}>
          <li><span>Form</span> { formatKey(camper.form)}</li>
          <li><span>Length</span> { camper.length.slice(0,-1)} m</li>
          <li><span>Width</span> { camper.width.slice(0,-1)} m</li>
          <li><span>Height</span> { camper.height.slice(0,-1)} m</li>
          <li><span>Tank</span> { camper.tank.slice(0,-1)} l</li>
          <li><span>Consumption</span> { camper.consumption}</li>
        </ul>
      </div></div>
      <SendForm/>
    </div>
  );
};


export default Features