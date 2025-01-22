import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='py-10 sm:py-8 lg:py-8'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Pagina non trovata
          </h2>
          <p className='text-lg text-gray-600 mb-8'>
            Sei sicuro che quello che stai cercando si trovi qui?
          </p>
          <Link
            to='/'
            className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700'
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
