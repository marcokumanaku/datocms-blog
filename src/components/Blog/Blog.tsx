import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDatoCMSData } from "../../api/queries";
import { Link } from "react-router-dom";
// Recupero dei dati necessari per la pagina Blog da DatoCMS
import { BLOG_QUERY } from "../../api/queries";

const Blog: React.FC = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ["article"], queryFn: () =>
    fetchDatoCMSData(BLOG_QUERY)
});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {data.data.allArticles.map((article: any) => (
        <div key={article.id} className='group relative'>
          <Link to={`/blog/${article.category.slug}/${article.slug}`}>
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
    </>
  );
};

export default Blog;
