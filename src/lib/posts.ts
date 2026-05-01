import { getCollection, type CollectionEntry } from "astro:content";

export type PostEntry = CollectionEntry<"posts">;

export async function getPosts() {
  const posts = await getCollection("posts");

  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getProjectPosts() {
  const posts = await getPosts();

  return posts.filter((post) => post.data.tags.includes("project"));
}

export function getPostPath(post: Pick<PostEntry, "slug">) {
  return `/posts/${post.slug}`;
}

export function formatPostDate(date: Date) {
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  const year = date.getUTCFullYear();

  return `${day}. ${month} ${year}`;
}
