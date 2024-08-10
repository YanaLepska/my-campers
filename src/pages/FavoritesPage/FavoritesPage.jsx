import { useSelector } from "react-redux";
import CamperList from "../../components/CamperList/CamperList";
import css from "./FavoritesPage.module.css";
import { selectCampers } from "../../redux/campers/selectors";
import { selectFavorites } from "../../redux/favorites/selectors";
import vanImage from "../../../public/camperCar.webp"; 
const FavoritesPage = () => {
  const favoriteIds = useSelector(selectFavorites);
  const allCampers = useSelector(selectCampers);

  const favoriteCampers = allCampers.filter(camper => favoriteIds.includes(camper._id));

  return (
    <div className={css.wrapper}>
      {favoriteCampers.length > 0 ? (
        <CamperList campers={favoriteCampers} />
      ) : (
        <div className={css.emptyState}>
          <img src={vanImage} alt="No favorites" className={css.emptyImage} />
          <p>No favorites yet! Start adding your favorite campers.</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
