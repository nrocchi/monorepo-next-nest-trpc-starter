import Link from "next/link";

export default async function Nest() {
  return (
    <>
    <h1>Trpc calls with Next internal API</h1>
    <Link
        role="button"
        href="/next/nest-direct"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
      >
        Trpc Nest with direct call
      </Link>
      <Link
        role="button"
        href="/next/next-react-query"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
      >
        Trpc Next with React Query
      </Link>
      <Link
        role="button"
        href="/next//next-ssr-react-query"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
      >
        Trpc Next SSR with React Query
      </Link>
      <Link
        role="button"
        href="/next//next-react-provider"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
      >
        Trpc React Provider with React Query
      </Link>
      <Link
        role="button"
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-10"
      >
        Back to home page
      </Link>
    </>
  );
}
