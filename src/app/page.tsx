import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages, getImagesByUserId } from "../server/queries";
import { Images } from "./_components/images";

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
  const images = await getImagesByUserId();

  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <Images images={images} />
      </SignedIn>
    </main>
  );
}
