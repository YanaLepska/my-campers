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

export const formatLocation = (location) => {
  const [country, city] = location.split(", ");
  return `${city}, ${country}`;
};

export const formatDetails = (details) => {
    const selectedKeys = [
    "transmission",
    "engine",
    "AC",
    "bathroom",
    "kitchen",
    "TV",
    "radio",
    "refrigerator",
    "microwave",
    "gas",
    "water",
  ];

  return Object.entries(details)
    .filter(([key, value]) => selectedKeys.includes(key) && (value > 0 || value === false))
    .map(([key, value]) => (
      <li key={key}>
        <svg className={css.icon}>
          <use href={categoryIcons[key.toLowerCase()]} />
        </svg>
        <>
          {value} {capitalizeFirstLetter(key)}
        </>
      </li>
    ));
};