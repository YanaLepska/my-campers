import { useState, useEffect } from "react";
import css from "./ModalDetails.module.css";
import icons from "../../../public/icons.svg";
import LocationReviewsInfo from "../LocationReviewsInfo/LocationReviewsInfo";
import Reviews from "../Reviews/Reviews";
import Features from "../Features/Features";

const ModalDetails = ({ camper, onClose }) => {
  const [activeButton, setActiveButton] = useState("features");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.modal} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <button className={css.closeBtn} onClick={onClose}>
          <svg className={css.closeIcon} width="32" height="32">
            <use href={`${icons}#icon-close`} />
          </svg>
        </button>
        <div className={css.info}>
          <p className={css.camperName}>{camper.name}</p>
          <LocationReviewsInfo camper={camper} />
          <p className={css.price}>€ {camper.price.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

        </div>
        <div>
          <ul className={css.gallery}>
            {camper.gallery.map((image, index) => (
              <li key={index}>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={css.image}
                />
              </li>
            ))}
          </ul>
          <p className={css.camperDescription}>{camper.description}</p>
          <ul className={css.linksList}>
            <li>
              <button
                type="button"
                className={activeButton === "features" ? css.activeButton : css.defaultButton}
                onClick={() => handleButtonClick("features")}
              >
                Features
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeButton === "reviews" ? css.activeButton : css.defaultButton}
                onClick={() => handleButtonClick("reviews")}
              >
                Reviews
              </button>
            </li>
          </ul>
          <div>
            {activeButton === "features" ? (
              <Features camper={camper} setActiveButton={setActiveButton} />
            ) : (
              <Reviews reviews={camper.reviews} setActiveButton={setActiveButton} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
