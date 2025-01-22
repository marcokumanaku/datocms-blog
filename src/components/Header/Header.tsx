import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-gray-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-6'>
          <div className='flex-shrink-0'>
            <Link to='/' className='text-2xl font-bold'>
              DatoCMS Blog - MK
            </Link>
          </div>
          <nav className='hidden md:flex space-x-10'>
            <Link to='/' className='text-base font-medium hover:text-gray-300'>
              Home
            </Link>
            <Link
              to='/blog'
              className='text-base font-medium hover:text-gray-300'
            >
              Blog
            </Link>
            <Link
              to='/'
              className='text-base font-medium hover:text-gray-300'
            >
              About
            </Link>
            <Link
              to='/'
              className='text-base font-medium hover:text-gray-300'
            >
              Contact
            </Link>
          </nav>
          <div className='md:hidden'>
            <button
              type='button'
              className='text-gray-300 hover:text-white focus:outline-none focus:text-white'
              onClick={toggleMenu}
            >
              <svg
                className='h-6 w-6'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='/'
              className='block text-base font-medium text-gray-300 hover:text-white'
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to='/blog'
              className='block text-base font-medium text-gray-300 hover:text-white'
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              to='/'
              className='block text-base font-medium text-gray-300 hover:text-white'
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to='/'
              className='block text-base font-medium text-gray-300 hover:text-white'
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
