import { Badge } from "@/components/ui/badge";
import { Collapse } from "iconoir-react";

interface Image {
  url: string;
  alt: string;
  caption?: string;
}

interface ImageGridProps {
  images: Image[];
  key: string;
  className?: string;
  caption?: string;
}

export function ImageGrid({ images, className, key, caption }: ImageGridProps) {
  const showImage = (src: string, alt: string, caption?: string) => {
    const image: HTMLImageElement | null = document.querySelector(
      "#image-container > img"
    );
    if (image) {
      image.src = src;
      image.alt = alt;
    }

    const captionElement = document.getElementById("image-container-caption");
    if (captionElement && caption) {
      captionElement.innerHTML = caption;
    }

    const container = document.getElementById("image-container");
    container?.classList.remove("hidden");
    container?.classList.add("flex");
  };

  return (
    <div className="container max-w-screen-md flex flex-col items-center p-0">
      <div
        className={`max-w-screen-md relative grid grid-cols-1 gap-7 p-0 ${
          images.length > 1 && "md:gap-3 md:grid-cols-2"
        } mt-10 rounded-2xl ${className}`}
      >
        {images.map((image, i) => (
          <img
            src={`/src/images/${image.url}`}
            key={`${key}_${i}`}
            alt={image.alt}
            onClick={() =>
              showImage(`/src/images/${image.url}`, image.alt, image.caption)
            }
            className="rounded-lg hover:cursor-pointer transition-all hover:scale-105"
          />
        ))}
      </div>
      {caption && (
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 font-poppins pb-7 pt-4">
          {caption}
        </p>
      )}
    </div>
  );
}
// dark and light mode images and image grid
