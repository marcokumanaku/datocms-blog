

import { Link } from "react-router-dom";
import Article from "../components/Blog/Article/Article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const ArticlePage = () => {
  return (
    <>
      <div className='bg-gray-100'>
        <div className='max-w-4xl mx-auto p-4 sm:py-8 lg:py-10'>
          <Link
            to='/'
            className='inline-flex items-center px-3 py-1 bg-gray-300 text-gray-800 font-medium rounded-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 mb-4'
          >
            <FontAwesomeIcon icon={faAngleLeft} className='w-3 h-3 mr-2' />
            Torna alla Home
          </Link>
          <Article />
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
