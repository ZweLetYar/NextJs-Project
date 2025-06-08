import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
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

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3001/posts/${params.id}`);
  if (!res.ok) {
    notFound();
  }

  const post: Post = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="relative w-full h-72 mb-8 rounded-xl overflow-hidden">
        <Image
          src={post.featured_image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>

      <div className="flex items-center gap-4 mb-6">
        <Image
          src={post.author.avatar}
          alt={post.author.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-white font-medium">{post.author.name}</p>
          <div className="text-sm text-gray-400 flex gap-4">
            <span>{post.metadata.reading_time}</span>
            <span>{post.metadata.views} views</span>
            <span>{post.metadata.likes} likes</span>
          </div>
        </div>
      </div>

      <div className="text-gray-300 leading-relaxed">
        {post.content.split("\n").map((para, i) => (
          <p key={i} className="mb-4">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
