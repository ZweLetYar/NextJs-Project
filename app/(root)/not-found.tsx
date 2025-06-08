// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <Image
        src="/404.png" // Optional: add a relevant image in public/404.svg
        alt="Not Found"
        width={300}
        height={300}
        className="mb-6 bg-white rounded-full"
      />
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6 text-gray-400">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link href="/">
        <span className="bg-white text-black px-5 py-2 rounded-md hover:bg-gray-300 transition">
          Go back home
        </span>
      </Link>
    </div>
  );
}
