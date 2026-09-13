import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4">
        {/* Mobile Navbar */}
        <div className="relative flex items-center justify-between md:hidden">
          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-lg sm:text-xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>

          {/* Logo - Center */}
          <img
            src={Logo}
            alt="DevStack"
            className="absolute left-1/2 w-20 -translate-x-1/2 sm:w-24"
          />

          {/* Mobile Buttons */}
          <div className="ml-auto flex items-center gap-1.5">
            <button className="px-1.5 text-xs sm:text-sm">
              Sign In
            </button>

            <button className="btn btn-active btn-secondary rounded-xl px-2 py-1 text-[11px] sm:px-3 sm:text-xs">
              Sign Up
            </button>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden items-center justify-between gap-4 md:flex">
          {/* Logo */}
          <img
            src={Logo}
            alt="DevStack"
            className="w-32.5 shrink-0"
          />

          {/* Navigation */}
          <ul className="flex items-center gap-5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="flex shrink-0 gap-3">
            <button>Sign In</button>

            <button className="btn btn-active btn-secondary rounded-2xl px-4">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:hidden">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;