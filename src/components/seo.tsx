export interface SeoProps {
  title: string;
  description: string;
  image?: string;
}

export const Seo = ({ title, description, image }: SeoProps) => {
  const metaImage = image;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="_akzhy" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />
    </>
  );
};
