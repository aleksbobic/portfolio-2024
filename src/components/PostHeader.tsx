import { Badge } from "@/components/ui/badge";

interface PostCardProps {
  date: string;
  title: string;
  abstract: string;
  tags: string[];
}

export function PostHeader({ title, date, abstract, tags }: PostCardProps) {
  return (
    <div className="container max-w-screen-lg">
      <div className="dark:bg-gray-800/20 bg-gray-100 rounded-2xl py-7 px-10 mb-6 relative overflow-hidden">
        <h2 className="text-3xl font-bold py-4 max-w-3xl font-archivo">
          {title}
        </h2>
        <h4 className="text-lg font-bold py-2 max-w-3xl font-archivo">TL;DR</h4>
        <p className="text-md italic opacity-75 font-poppins">{abstract}</p>
        <div className="flex flex-wrap gap-3 mt-4 w-full mb-8">
          {tags
            .sort()
            .filter((tag: string) => tag !== "project")
            .map((tag: string) => (
              <Badge
                key={tag}
                className="px-2 py-1 text-xs dark:bg-gray-800 dark:text-gray-300 bg-gray-200 text-gray-600 uppercase font-poppins"
              >
                {tag}
              </Badge>
            ))}
        </div>
        <p className="text-xs text-gray-500/60 font-extrabold mt-2 font-poppins">
          {date}
        </p>
      </div>
    </div>
  );
}
