// components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-gray-300 transition"
        >
          Blogify
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition">
            About
          </Link>
          <Link href="/blog" className="hover:text-gray-400 transition">
            Posts
          </Link>
          <Link href="/contact" className="hover:text-gray-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
