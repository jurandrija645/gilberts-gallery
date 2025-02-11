"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../../utils/uploadthing";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between border-b px-10 py-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              alert("Upload complete");
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
