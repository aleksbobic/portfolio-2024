import { Collapse } from "iconoir-react";
import { useEffect, useState } from "react";

interface Image {
  url: string;
  alt: string;
  caption?: string;
}

interface ImageGridProps {
  images: Image[];
  imageKeyPrefix?: string;
  className?: string;
  caption?: string;
}

export function ImageGrid({
  images,
  className,
  imageKeyPrefix = "image",
  caption,
}: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="container max-w-screen-md flex flex-col items-center p-0">
      <div
        className={`max-w-screen-md relative grid grid-cols-1 gap-7 p-0 ${
          images.length > 1 && "md:gap-3 md:grid-cols-2"
        } mt-10 rounded-2xl ${className}`}
      >
        {images.map((image, i) => (
          <button
            key={`${imageKeyPrefix}_${i}`}
            type="button"
            onClick={() => setSelectedImage(image)}
            className="rounded-lg overflow-hidden transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={`Open image: ${image.alt}`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="rounded-lg hover:cursor-pointer transition-all"
            />
          </button>
        ))}
      </div>
      {caption && (
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 font-poppins pb-7 pt-4">
          {caption}
        </p>
      )}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/40 p-6 backdrop-blur-md dark:bg-black/40 sm:p-14"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="fixed right-6 top-6 rounded-lg p-1 transition-all hover:scale-125 hover:bg-white/5"
            aria-label="Close image preview"
          >
            <Collapse />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="h-auto max-h-[80vh] w-auto max-w-full"
            onClick={(event) => event.stopPropagation()}
          />
          {selectedImage.caption && (
            <p className="pb-7 pt-4 text-center text-sm text-gray-700 dark:text-gray-400 font-poppins">
              {selectedImage.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
