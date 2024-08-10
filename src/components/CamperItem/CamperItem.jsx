import css from "./CamperItem.module.css";
import CategoriesList from "../CategoriesList/CategoriesList";
import { useState } from "react";
import ModalDetails from "../ModalDetails/ModalDetails";
import LocationReviewsInfo from "../LocationReviewsInfo/LocationReviewsInfo";
import LikeButton from "../LikeButton/LikeButton";
const CamperItem = ({ camper }) => {
  const [showMoreModal, setShowMoreModal] = useState(false);

  const onModalOpen = () => {
    setShowMoreModal(true);
  };
  const onModalClose = () => {
    setShowMoreModal(false);
  };

  return (
    <div className={css.camperCard}>
      <img
        className={css.camperImg}
        src={camper.gallery[0]}
        alt="Camper photo"
      />
      <div className={css.camperInfoConteiner}>
        <div className={css.camperInfoPrice}>
          <div className={css.camperPrice}>
            <p className={css.camperName}>{camper.name}</p>
            <div className={css.priceLike}>
             <p className={css.price}>€ {camper.price.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>

              <LikeButton camperId={camper._id}/>
            </div>
          </div>
          <LocationReviewsInfo camper={camper} />
        </div>
        <p className={css.camperDescription}>{camper.description}</p>
        <CategoriesList
          camper={camper}
          className="categoriesList"
          itemClassName="categoriesListItem"
        />
        <button className={css.btnShowDetails} onClick={onModalOpen}>
          Show more
        </button>
      </div>
      {showMoreModal && <ModalDetails camper={camper} onClose={onModalClose} />}
    </div>
  );
};

export default CamperItem;
