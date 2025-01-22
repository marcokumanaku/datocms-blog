import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RedirectPage from "../../pages/RedirectPage";
import BlogPage from "../../pages/BlogPage";
import ArticlePage from "../../pages/ArticlePage";
import NotFoundPage from "../../pages/NotFoundPage"; // Importa la pagina 404

// Configurazione rotte
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<RedirectPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:category/:slug' element={<ArticlePage />} />
          <Route path='/blog/:category' element={<RedirectPage />} />
          <Route path='*' element={<NotFoundPage />} /> {/* Rotta per 404 */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
