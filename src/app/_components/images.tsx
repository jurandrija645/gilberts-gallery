import { images } from "../../server/db/schema";
import Image from "next/image";

interface ImagesProps {
  images: (typeof images.$inferSelect)[];
}

export function Images({ images }: ImagesProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {[...images].map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Image
            src={image.url}
            style={{ objectFit: "contain" }}
            width={192}
            height={192}
            alt={image.name}
          />
          <div>{image.name}</div>
        </div>
      ))}
      <h1>Hello, testing deployment status</h1>
    </div>
  );
}
