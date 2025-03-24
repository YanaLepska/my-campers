import css from "./components/CategoriesList/CategoriesList.module.css";
import { categoryIcons } from "./components/CategoriesList/icons";

export const capitalizeFirstLetter = (string) => {
  if (string.length === 2) {
    return string.toUpperCase();
  }
  if (string === "panelTruck") {
    return "Panel truck";
  }
  if (string === "fullyIntegrated") {
    return "Fully integrated";
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const formatKey = (key) => {
  if (key.toLowerCase() === "airconditioner") {
    return "Air сonditioner";
  }
  return capitalizeFirstLetter(key);
};

export const formatLocation = (location) => {
  const [country, city] = location.split(", ");
  return `${city}, ${country}`;
};

export const formatDetails = (details) => {
  return (
      Object.entries(details)
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
        ))
  );
};
