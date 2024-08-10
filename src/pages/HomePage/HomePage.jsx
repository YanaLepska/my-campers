import css from "./HomePage.module.css";
import SlidingImage from "../../components/SlidingImage/SlidingImage";

const HomePage = () => {
  return (
    <div className={css.homePage}>
        <div>
        <div className={css.container}>
        <h1 className={css.title}>Campers: your freedom on wheels!</h1>
        <p className={css.slogan}>
          We&rsquo;ll help
          make every journey unforgettable! 
        </p>
      </div>
      <div className={css.description}>
        <p className={css.descriptionText}>
          Welcome to Freedom Campers — your trusted partner in the world of mobile
          leisure.<br/><br/>We specialize in selling premium campers that open new
          horizons for travelers who value freedom, comfort, and adventure. Our
          range includes campers to suit every taste, from compact models for
          solo journeys to spacious family options.<br/><br/>Each camper in our
          collection is carefully selected and equipped with all the necessary
          amenities for a worry-free journey. We offer solutions that meet the
          most demanding needs, from cutting-edge technology to stylish interior
          design.<br/><br/> Our team of experts is always ready to help you choose the
          perfect camper, taking into account all your desires and needs. Feel
          at home wherever you go — with our campers, you&rsquo;ll always be
          surrounded by comfort and coziness. 
        </p>
      </div>
      <p className={css.text}>© 2024 Yana Lepska GoIT </p>
      </div>
      <SlidingImage />
   </div>
  );
};

export default HomePage;
