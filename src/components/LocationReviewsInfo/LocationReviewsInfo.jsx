import css from "./LocationReviewsInfo.module.css";
import icons from "../../assets/sprite.svg";
import { formatLocation } from "../../function";

const LocationReviewsInfo = ({ camper }) => {

  return (
    <div className={css.camperInfoLocationConteiner}>
      <button className={css.buttonReviews}>
        <svg className={css.star} width="16" height="16">
          <use href={`${icons}#rating`} />
        </svg>
        {camper.rating} ({camper.reviews.length} Reviews)
      </button>

      <div className={css.locationBox}>
        <svg className={css.location} width="16" height="16">
          <use href={`${icons}#map-pin`} />
        </svg>
        <p>{formatLocation(camper.location)}</p>
      </div>
    </div>
  );
};

export default LocationReviewsInfo;
