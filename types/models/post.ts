export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  contentPreview: string;
  image: {
    url: string;
    alt: string;
  };
};
