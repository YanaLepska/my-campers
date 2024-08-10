import { useDispatch, useSelector } from "react-redux";
import CamperItem from "../CamperItem/CamperItem";
import { useEffect, useState } from "react";
import { fetchAdvert } from "../../redux/campers/operations";
import css from "./CamperList.module.css";
import { selectCampers } from "../../redux/campers/selectors";

const CamperList = ({ campers }) => {
  const dispatch = useDispatch();
  const allCampers = useSelector(selectCampers);
  const [currentPage, setCurrentPage] = useState(1);
  const campersPerPage = 4;
  const displayCampers = campers || allCampers;

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
    <div>
      <ul className={css.camperList}>
        {visibleCampers.map((camper) => (
          <li key={camper.id}>
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
