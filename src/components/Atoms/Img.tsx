import type { JSX } from "solid-js/jsx-runtime";

export const Img = ({
  source,
  ...props
}: { source: ImageMetadata } & JSX.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src={source.src}
      width={source.width}
      height={source.height}
      {...props}
    />
  );
};
