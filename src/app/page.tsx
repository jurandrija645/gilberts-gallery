import Link from "next/link";
import { db } from "../server/db/index";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://xq9jt69x2b.ufs.sh/f/fa0cC13bK8alJU7PcLp8to0zXMm5FI2TrEGi7O1LaDlfxRsp",
  "https://xq9jt69x2b.ufs.sh/f/fa0cC13bK8alwQStixJtNdlov6LpzAkYPr1Bqn72CHZGg098",
  "https://xq9jt69x2b.ufs.sh/f/fa0cC13bK8alsnKMBGoS2lw4kEvCT3XfznpNo5BWxeahY19R",
  "https://xq9jt69x2b.ufs.sh/f/fa0cC13bK8alVYrKpLPWVKJBCwD09QFNhfXgHRpb1TG85Izd",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  url,
}));

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  console.log(images);

  return (
    // TODO: Add a search bar
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images, ...images].map((image, index) => (
          <div key={`${image.id}-${index}`} className="felx w-48 flex-col">
            <img src={image.url} alt="image" />
            <div>{image.name}</div>
          </div>
        ))}
        <h1>Hello, testing deployment status</h1>
      </div>
    </main>
  );
}
