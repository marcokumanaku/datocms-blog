

import { Link } from "react-router-dom";
import Article from "../components/Blog/Article";

const ArticlePage = () => {
  return (
    <>
        <div className='max-w-4xl mx-auto p-4'>
      <Link
        to='/'
        className='inline-flex items-center text-blue-500 hover:text-blue-700 mb-4'
      >
        <svg
          className='w-4 h-4 mr-2'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 19l-7-7 7-7'
          ></path>
        </svg>
        Torna alla Home
      </Link>
      <Article />
      </div>
    </>
  );
};

export default ArticlePage;
