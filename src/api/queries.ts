import datoCMSClient from "./client";

// Funzione per effettuare le richieste a DatoCMS
export const fetchDatoCMSData = async (query: string, variables?: object) => {
  const response = await datoCMSClient.post("", {
    query,
    variables,
  });
  return response.data;
};

// Query per articoli del blog
export const BLOG_QUERY = `
  query {
    allArticles {
      id
      title
      body
      slug
      category {
        name
        slug
      }
      image {
        url
        alt
      }
    }
  }
`;

// Query per recuperare dati singolo articolo
export const ARTICLE_QUERY = `
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