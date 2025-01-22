import { BrowserRouter, Route, Routes } from "react-router-dom";
import RedirectPage from "../../pages/RedirectPage";
import BlogPage from "../../pages/BlogPage";
import ArticlePage from "../../pages/ArticlePage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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
            </Routes>
        <Footer />
     </BrowserRouter>
    </>
  );
};

export default AppRouter;
