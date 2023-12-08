import { logo } from "@/app/page";
import { clsx } from "clsx";

export const HeadingOne = () => {
  return (
    <h1
      className={clsx(
        "text-[4rem] font-bold text-center px-4 leading-[3rem] drop-shadow-lg",
        logo.className
      )}
    >
      Incredible <span className="text-green-400">In</span>
      <span className="text-white">d</span>
      <span className="text-orange-400">ia</span>
    </h1>
  );
};

export const HeadingTwo = () => {
  return (
    <p className={clsx("text-center text-[4rem] mx-4 mt-4 drop-shadow-md dark:text-white", logo.className)}>
      Destinations
    </p>
  );
};
