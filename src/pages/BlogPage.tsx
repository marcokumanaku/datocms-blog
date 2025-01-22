import Blog from "../components/Blog/Blog";

const BlogPage = () => {
  return (
    <div className='bg-gray-100'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='py-10 sm:py-8 lg:py-8'>
          <h2 className='text-2xl font-bold text-gray-900'>Blog</h2>
          <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            <Blog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
