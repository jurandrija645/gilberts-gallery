import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
