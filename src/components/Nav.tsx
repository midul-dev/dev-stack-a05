import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="container mx-auto px-4 py-4">
        {/* Top Navbar */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <img
            src={Logo}
            alt="DevStack"
            className="w-28 shrink-0 sm:w-32.5"
          />

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-5 md:flex">
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
          <div className="hidden shrink-0 gap-3 md:flex">
            <button>Sign In</button>

            <button className="btn btn-active btn-secondary rounded-2xl px-4">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-5 flex flex-col items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:hidden">
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

            <div className="flex gap-3">
              <button>Sign In</button>

              <button className="btn btn-active btn-secondary rounded-2xl px-4">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;