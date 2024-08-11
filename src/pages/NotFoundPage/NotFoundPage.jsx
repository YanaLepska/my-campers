import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={css.notFoundPage}>
      <h1>Oooops, page not found</h1>
      <p>You will be redirected to the homepage in a few seconds...</p>
    </div>
  );
};

export default NotFoundPage;
