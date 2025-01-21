import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import ArticleDetail from "./components/ArticleDetail";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>My DatoCMS Blog</h1>
      <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/article/:id' element={<ArticleDetail />} />
      </Routes>
    </div>
  );
};

export default App;
