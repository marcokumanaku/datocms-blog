import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDatoCMSData } from "../../../api/queries";
import { Link } from "react-router-dom";
// Recupero dei dati necessari per la pagina Blog da DatoCMS
import { BLOG_QUERY } from "../../../api/queries";
import { Article } from "../interface";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import  {toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Blog: React.FC = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["article"],
    queryFn: () => fetchDatoCMSData(BLOG_QUERY),
  });

  // Gestisci tramite Skeleton il caricamento dei dati
  if (isLoading) {
    return (
      <>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div key={index} className='group relative'>
              <Skeleton height={410} className='w-full rounded-lg' />
              <Skeleton width={`60%`} className='mt-6' />
              <Skeleton width={`80%`} />
            </div>
          ))}
      </>
    );
  }

  // Gestisci tramite un toast l'errore nel caricamento degli articoli
  if (error) {
    toast.error("Errore nel caricamento degli articoli");
    return <ToastContainer />;
  }

  return (
    <>
      {data.data.allArticles.map((article: Article) => (
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
