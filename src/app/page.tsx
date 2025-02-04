import Link from "next/link";
import { db } from "../server/db/index";

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
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    // TODO: Add a search bar
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}{" "}
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
