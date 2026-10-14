'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const activeLink = usePathname();
  const links = (
  <>
    <li>
      <Link
        href="/"
        className={`${
          activeLink === "/"
            ? "text-[#C2F800] font-bold"
            : "text-white"
        } transition-colors`}
      >
        Workouts
      </Link>
    </li>

    <li>
      <Link
        href="/workouts"
        className={`${
          activeLink === "/workouts"
            ? "text-[#C2F800] font-bold"
            : "text-white"
        } transition-colors`}
      >
        My Plan
      </Link>
    </li>
  </>
);

  return (
    <nav className="bg-[#1C1F26] shadow-sm">
        <div className="navbar container mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <button
              type="button"
              tabIndex={0}
              aria-label="Open navigation menu"
              className="btn btn-ghost lg:hidden"
            >
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
            </button>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold"
          >
            <Image
              src="/assets/logo.png"
              alt="FitLog logo"
              width={28}
              height={28}
              priority
            />
            <span className="text-white">FITLOG</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            {links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          <Link
            href="/plans"
            className="text-white btn btn-primary btn-sm sm:btn-md"
          >
            Plan
          </Link>

          <Link
            href="/saved"
            className="text-white btn btn-outline btn-sm sm:btn-md"
          >
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
