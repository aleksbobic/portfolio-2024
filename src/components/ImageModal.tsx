import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  date: string;
  title: string;
  abstract: string;
  tags: string[];
}

export function PostHeader({ title, date, abstract, tags }: PostCardProps) {
  return <div className="container max-w-screen-lg"></div>;
}
// dark and light mode images and image grid
