import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchDatoCMSData } from "../api/queries";

const ARTICLE_QUERY = `
  query Article($id: ItemId!) {
    article(filter: {id: {eq: $id}}) {
      id
      title
      body
    }
  }
`;

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchDatoCMSData(ARTICLE_QUERY, { id })
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const article = data.data.article;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleDetail;
