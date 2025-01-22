export interface Article {
  id: string;
  title: string;
  body: string;
  slug: string;
  category: {
    name: string;
    slug: string;
  };
  image: {
    url: string;
    alt: string;
  };
}
