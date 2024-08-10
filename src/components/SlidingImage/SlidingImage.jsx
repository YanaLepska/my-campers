import { useState, useEffect } from "react";
import css from "./SlidingImage.module.css";
import vanInForest from "../../../public/van-in-forest.jpg";

const SlidingImage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${css.sliderContainer} ${isVisible ? css.visible : ""}`}>
      <img src={vanInForest} alt="Sliding Image" className={css.slidingImage} />
    </div>
  );
};

export default SlidingImage;
