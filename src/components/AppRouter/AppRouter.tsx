import { Route, Routes } from "react-router-dom";
import RedirectPage from "../../pages/RedirectPage";
import BlogPage from "../../pages/BlogPage";
import ArticlePage from "../../pages/ArticlePage";

// Configurazione rotte
const AppRouter = () => {
  return (
      <Routes>
        <Route path='/' element={<RedirectPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:category/:slug' element={<ArticlePage />} />
      </Routes>
  );
};

export default AppRouter;
