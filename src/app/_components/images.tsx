import { images } from "../../server/db/schema";

interface ImagesProps {
  images: (typeof images.$inferSelect)[];
}

export function Images({ images }: ImagesProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {[...images].map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} alt="image" />
          <div>{image.name}</div>
        </div>
      ))}
      <h1>Hello, testing deployment status</h1>
    </div>
  );
}
