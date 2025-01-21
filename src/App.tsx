import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import ArticleDetail from "./components/ArticleDetail";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/news/:slug' element={<ArticleDetail />} />
      </Routes>
    </div>
  );
};

export default App;
