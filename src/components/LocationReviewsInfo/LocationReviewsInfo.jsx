import css from "./LocationReviewsInfo.module.css";
import icons from "../../../public/icons.svg";


const LocationReviewsInfo = ({camper}) => {
      const formatLocation = (location) => {
    const [country, city] = location.split(", ");
    return `${city}, ${country}`;
    };
    
  return (
    <div className={css.camperInfoLocationConteiner}>
            <button className={css.buttonReviews}>
              <svg className={css.star} width="16" height="16">
                <use href={`${icons}#icon-Rating`} />
              </svg>
              {camper.rating} ({camper.reviews.length} Reviews)
            </button>
            <div className={css.locationBox}>
              <svg className={css.location} width="16" height="16">
                <use href={`${icons}#icon-map-pin`} />
              </svg>
              <p>{formatLocation(camper.location)}</p>
            </div>
          </div>
  )
}

export default LocationReviewsInfo