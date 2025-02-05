import { images } from "../../server/db/schema";

interface ImagesProps {
  images: (typeof images.$inferSelect)[];
}

export function Images({ images }: ImagesProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images, ...images].map((image, index) => (
        <div key={`${image.id}-${index}`} className="flex w-48 flex-col">
          <img src={image.url} alt="image" />
          <div>{image.name}</div>
        </div>
      ))}
      <h1>Hello, testing deployment status</h1>
    </div>
  );
}
