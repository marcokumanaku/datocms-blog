import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchDatoCMSData } from "../../api/queries";
import parse, { domToReact } from "html-react-parser";
import { ARTICLE_QUERY } from "../../api/queries";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  XIcon,
  LinkedinIcon,
} from "react-share";

const Article: React.FC = () => {
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
  const shareUrl = window.location.href;

  const options = {
    replace: ({ name, attribs, children }: any) => {
      if (!attribs) return;

      switch (name) {
        case "h2":
          return (
            <h2 className='text-2xl font-bold mt-5 mb-3'>
              {domToReact(children, options)}
            </h2>
          );
        case "p":
          return <p className='my-2'>{domToReact(children, options)}</p>;
        case "img":
          return <img {...attribs} className='rounded-lg' />;
      }
    },
  };

  return (
    <>
      <div
        className='relative w-full h-64 bg-cover bg-center rounded-lg mb-4'
        style={{ backgroundImage: `url(${article.image.url})` }}
      >
        <div className='absolute inset-0 bg-black opacity-50 rounded-lg'></div>
        <div className='relative z-10 flex items-center justify-center h-full'>
          <h2 className='text-3xl font-bold text-white text-center px-2'>{article.title}</h2>
        </div>
      </div>
      <div className='text-md text-left'>{parse(article.body, options)}</div>
      <div className='flex justify-center mt-8 space-x-4'>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={article.title}>
          <XIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={article.title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </>
  );
};

export default Article;