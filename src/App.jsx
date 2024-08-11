import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const NotFoundPage = lazy(() =>import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/my-campers/" element={<HomePage />} />
            <Route path="/my-campers/catalog" element={<CatalogPage />}/>
            <Route path="/my-campers/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
