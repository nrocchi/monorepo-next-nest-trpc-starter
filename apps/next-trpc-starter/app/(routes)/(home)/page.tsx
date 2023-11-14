import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Link
        role="button"
        href="/nest"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Trpc with Nest (external API)
      </Link>
      <Link
        role="button"
        href="/next"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
      >
        Trpc with Next (internal API)
      </Link>
    </>
  );
}
