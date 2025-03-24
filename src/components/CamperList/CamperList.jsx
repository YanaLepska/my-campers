import { useDispatch, useSelector } from "react-redux";
import CamperItem from "../CamperItem/CamperItem";
import { useEffect, useState } from "react";
import { fetchAdvert } from "../../redux/campers/operations";
import css from "./CamperList.module.css";
import { selectVisibleCampers } from "../../redux/campers/selectors";

const CamperList = ({ campers }) => {
  const dispatch = useDispatch();
   const allCampers = useSelector(selectVisibleCampers);
  const displayCampers = campers || allCampers;
  const [currentPage, setCurrentPage] = useState(1);
  const campersPerPage = 4;
  
 useEffect(() => {
    if (!campers) {
      dispatch(fetchAdvert());
    }
  }, [dispatch, campers]);

  const visibleCampers = displayCampers.slice(0, currentPage * campersPerPage);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.campersContainer}>
      <ul className={css.camperList}>
        {visibleCampers.map((camper) => (
          <li key={camper._id}>
            <CamperItem camper={camper} />
          </li>
        ))}
      </ul>
      <div className={css.camperMain}>
        {visibleCampers.length < displayCampers.length && (
          <button onClick={loadMore} className={css.LoadMoreButton}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default CamperList;
