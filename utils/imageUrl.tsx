import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "./client";

const ImageUrl = ({ image, className }: any) => {
  const imageProps = useNextSanityImage(client, image);

  // Handle case where imageProps is null or undefined
  if (!imageProps) {
    console.error("Image props are null for image:", image);
    return null; // Or return a placeholder image or an error message
  }

  // Check if image.alt is defined; if not, provide a default alt text
  const altText = image.alt || "Image";

  return (
    <Image
      {...(imageProps as any)} // Type assertion to any to suppress TypeScript error
      style={{ width: "100%", height: "auto" }}
      decoding="async"
      loading="lazy"
      sizes="(max-width: 800px) 100vw, 800px"
      className={className}
      alt={altText} // Use altText which defaults to "Image" if image.alt is undefined
    />
  );
};

export default ImageUrl;
