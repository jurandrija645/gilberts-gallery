import Link from "next/link";
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
          <Link href={`/photos/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
          <div className="mt-2 truncate text-sm text-gray-200">
            {image.name} - {image.createdAt.toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
}
