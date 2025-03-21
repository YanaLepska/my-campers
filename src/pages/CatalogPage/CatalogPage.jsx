import CamperList from "../../components/CamperList/CamperList"
import FiltersContainer from "../../components/FiltersContainer/FiltersContainer";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  
  return (
    <div className={css.catalogPage}>
      <FiltersContainer/>
      <CamperList />
    </div>
  )
}

export default CatalogPage