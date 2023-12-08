"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ExploreLink = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex mt-10 pl-4 text-2xl font-semibold hover:transition-transform hover:translate-x-2 duration-300 ease-in-out"
    >
      <Link href="/explore" className="pt-1 mr-2 shadow-lg">
        explore
      </Link>
      <span
        className={`hover:transition-transform ${
          isHovered && "translate-x-2"
        } duration-300 ease-in-out`}
      >
        <Image
          width="48"
          height="64"
          src="https://img.icons8.com/laces/64/ffffff/arrow.png"
          alt="arrow"
        />
      </span>
    </button>
  );
};

export default ExploreLink;
