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
      {data.data.allArticles.map((article: any) => (
        <div key={article.id}>
          <h2>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </h2>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
