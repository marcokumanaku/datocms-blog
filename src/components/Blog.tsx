import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDatoCMSData } from "../api/queries";
import { Link } from "react-router-dom";

const BLOG_QUERY = `
  query {
    allArticles {
      id
      title
      body
      slug
      category {
        name
      }
      image {
        url
        alt
      }
    }
  }
`;

const Blog: React.FC = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ["article"], queryFn: () =>
    fetchDatoCMSData(BLOG_QUERY)
});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className='bg-gray-100'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
            <h2 className='text-2xl font-bold text-gray-900'>
              Dato CMS - Blog
            </h2>

            <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
              {data.data.allArticles.map((article: any) => (
                <div key={article.id} className='group relative'>
                  <Link to={`/news/${article.slug}`}>
                    <img
                      alt={article.image.alt}
                      src={article.image.url}
                      className='w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square'
                    />
                    <h3 className='mt-6 text-sm text-gray-500'>
                      {article.category.name}
                    </h3>
                    <p className='text-base font-semibold text-gray-900'>
                      {article.title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
