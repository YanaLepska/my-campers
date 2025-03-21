import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <div className={css.container}>
        <h1 className={css.title}>Campers: your freedom on wheels!</h1>
        <p className={css.slogan}>
          You can find everything you want in our catalog
        </p>
      </div>
        <button className={css.btnViewCatalog} type="button">View Now</button>
        <p className={css.text}>© 2024 Yana Lepska GoIT </p>
   </div>
  );
};

export default HomePage;
