import type { MDXInstance } from "astro";

interface PostCardProps {
  post: MDXInstance<Record<string, any>>;
  blobAnimation: string;
}

export function PostCard({ post, blobAnimation }: PostCardProps) {
  return (
    <div className="group relative">
      <a
        href={post.url}
        className="row-span-1 rounded-2xl border-2 border-slate-400/10 bg-neutral-100 hover:bg-neutral-200/80 hover:backdrop-blur-md dark:hover:backdrop-blur-md p-8 dark:bg-[rgb(10,10,10)] hover:dark:bg-[rgba(10,10,10,0.95)] flex flex-col justify-center items-center aspect-square transition-all hover:scale-105 relative  overflow-hidden z-10 hover:border-opacity-50"
      >
        <h1 className="text-3xl font-archivo font-bold text-center dark:text-white text-gray-800 mb-4 max-w-56 ">
          {post.frontmatter.title}
        </h1>

        <p className="font-medium text-center text-gray-500 max-w-56 font-poppins">
          {post.frontmatter.teaser}
        </p>
      </a>
      <div
        className={`absolute top-0 -left-4 w-72 h-72 bg-purple-300 hidden rounded-full opacity-0 filter blur-xl dark:mix-blend-normal mix-blend-multiply transition-all group-hover:opacity-60 z-0 group-hover:block pointer-events-none ${blobAnimation}`}
      ></div>
      <div
        className={`absolute top-0 -right-4 w-72 h-72 bg-yellow-200 hidden rounded-full opacity-0 dark:mix-blend-normal mix-blend-multiply filter blur-xl animation-delay-2000 group-hover:opacity-60 group-hover:block z-0 pointer-events-none ${blobAnimation}`}
      ></div>
      <div
        className={`absolute -bottom-8 left-28 w-72 h-72 bg-pink-300 hidden rounded-full opacity-0 dark:mix-blend-normal mix-blend-multiply filter blur-xl animation-delay-4000 group-hover:opacity-60 z-0 group-hover:block pointer-events-none ${blobAnimation}`}
      ></div>
    </div>
  );
}
