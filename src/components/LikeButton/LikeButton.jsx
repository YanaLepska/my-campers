import { useDispatch, useSelector } from "react-redux";
import icons from "../../../public/icons.svg";
import { selectFavorites } from "../../redux/favorites/selectors";
import css from "./LikeButton.module.css";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";

const LikeButton = ({ camperId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isLiked = favorites.includes(camperId);

  const toggleFavorite = () => {
    if (isLiked) {
      dispatch(removeFavorite(camperId));
    } else {
      dispatch(addFavorite(camperId));
    }
  };

  return (
    <button className={css.likeButton} onClick={toggleFavorite}>
      <svg
        className={isLiked ? css.heartFill : css.heart}
        width="25"
        height="24"
      >
        <use href={`${icons}#icon-heart`} />
      </svg>
    </button>
  );
};

export default LikeButton;
