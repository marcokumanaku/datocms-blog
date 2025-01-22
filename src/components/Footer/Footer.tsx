import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between sm:flex-row'>
          <p className='text-center text-sm sm:text-left'>
            &copy; {new Date().getFullYear()} DatoCMS Blog - MK. All rights
            reserved.
          </p>
          <div className='mt-4 sm:mt-0'>
            <a href='#' className='text-gray-400 hover:text-white mx-2'>
              Privacy Policy
            </a>
            <a href='#' className='text-gray-400 hover:text-white mx-2'>
              Terms of Service
            </a>
            <a href='#' className='text-gray-400 hover:text-white mx-2'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
