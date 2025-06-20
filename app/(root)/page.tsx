import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

// Type for post
type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  featured_image: string;
  metadata: {
    views: number;
    reading_time: string;
    likes: number;
  };
};

// Async server component (app directory)
export default async function Page() {
  const res = await fetch("http://localhost:3001/posts", {
    next: { revalidate: 60 }, // optional: to cache and revalidate
  });

  if (!res.ok) {
    notFound();
  }

  const posts: Post[] = await res.json();

  return (
    <div className="flex flex-col  items-center gap-8 bg-black min-h-screen py-10 px-4 mt-5">
      <h1 className="font-bold text-2xl ">
        Web developmet | <span className="text-sky-500">Blog Posts</span>
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`posts/${post.id}`} key={post.id}>
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 text-white">
              <Image
                src={post.featured_image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 mb-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span className="text-sm text-gray-400">
                    {post.author.name}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{post.metadata.reading_time}</span>
                  <span>{post.metadata.views} views</span>
                  <span>❤️ {post.metadata.likes}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
