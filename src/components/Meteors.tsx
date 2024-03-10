import { cn } from "@/lib/utils";
import clsx from "clsx";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <div className={className}>
      <div className="relative">
        {meteors.map((el, idx) => (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-white shadow-white rotate-0",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[rgba(255,255,255,0.3)] before:to-transparent"
            )}
            style={{
              top: 0,
              left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
              animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * (7 - 2) + 2) + "s",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};
