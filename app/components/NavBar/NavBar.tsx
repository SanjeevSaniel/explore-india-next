import Link from "next/link";
import clsx from "clsx";
import { logo } from "@/app/page";

const NavBar = () => {
  return (
    <div className="navbar text-white m-auto max-w-[1280px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <button>Submenu 1</button>
                </li>
                <li>
                  <button>Submenu 2</button>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-white">
          <span className="text-md font-medium shadow-xl">explore</span>
          <span
            className={clsx(
              "font-semibold text-4xl leading-8 shadow-xl",
              logo.className
            )}
          >
            <span className="text-green-400">In</span>
            <span>d</span>
            <span className="text-orange-400">ia</span>
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white text-[1rem] font-medium px-1">
          <li>
            <button>Destinations</button>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-1 bg-green-600 opacity-80 w-[8rem] rounded-md">
                <li>
                  <button className="">Submenu 1 </button>
                </li>
                <li>
                  <button>Submenu 2</button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button>Experiences</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/">
          <span className="bg-orange-500 bg-opacity-40 px-3 pt-1 pb-2 rounded-md drop-shadow-lg hover:bg-green-700 hover:bg-opacity-70">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
