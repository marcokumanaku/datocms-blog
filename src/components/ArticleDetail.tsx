// filepath: /c:/Private/RepoGithub/datocms-blog/src/components/ArticleDetail.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchDatoCMSData } from "../api/queries";
import DOMPurify from "dompurify";
import parse, { domToReact } from "html-react-parser";

const ARTICLE_QUERY = `
  query Article($slug: String!) {
    article(filter: {slug: {eq: $slug}}) {
      id
      title
      body
      image {
        url
        alt
      }
    }
  }
`;

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["article", slug],
    queryFn: () => fetchDatoCMSData(ARTICLE_QUERY, { slug }),
  });

  if (isLoading) return <div className='text-center'>Loading...</div>;
  if (error)
    return (
      <div className='text-center text-red-500'>Error: {error.message}</div>
    );

  const article = data.data.article;

  const options = {
    replace: ({ name, attribs, children }: any) => {
      if (!attribs) return;

      switch (name) {
        case "h2":
          return (
            <h2 className='text-2xl font-bold my-4'>
              {domToReact(children, options)}
            </h2>
          );
        case "p":
          return <p className='my-2'>{domToReact(children, options)}</p>;
        // Aggiungi altri casi per altri elementi HTML se necessario
      }
    },
  };

  return (
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
      <div
        className='relative w-full h-64 bg-cover bg-center rounded-lg mb-4'
        style={{ backgroundImage: `url(${article.image.url})` }}
      >
        <div className='absolute inset-0 bg-black opacity-50 rounded-lg'></div>
        <div className='relative z-10 flex items-center justify-center h-full'>
          <h2 className='text-3xl font-bold text-white'>{article.title}</h2>
        </div>
      </div>
      <div className='text-md text-left'>{parse(article.body, options)}</div>
    </div>
  );
};

export default ArticleDetail;
