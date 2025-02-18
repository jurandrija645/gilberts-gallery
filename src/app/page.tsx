import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages, getImagesByUserId } from "../server/queries";
import { Images } from "./_components/images";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getImagesByUserId();

  return (
    <main>
      <div className="mx-auto flex w-[80%] flex-col items-center justify-center gap-8 rounded-lg bg-gray-900 p-8">
        <SignedOut>
          <p className="h-full w-full text-center text-2xl">Please sign in</p>
        </SignedOut>
        <SignedIn>
          <Images images={images} />
          <Link href="/photos/1">
            <button className="mb-4 mt-10 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-600">
              Upload Photo
            </button>
          </Link>
        </SignedIn>
      </div>
    </main>
  );
}
