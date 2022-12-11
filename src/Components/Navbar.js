import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className=" flex flex-wrap items-center justify-between px-2 py-3 mb-3 shadow-lg bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                >
                  <span className="ml-2 text-base">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="experiences"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                >
                  <span className="ml-2 text-base">Experiences</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                >
                  <span className="ml-2 text-base">Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="blogs"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                >
                  <span className="ml-2 text-base">Blogs</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contactMe"
                  spy={true}
                  smooth={true}
                  duration={500}
                  style={{ cursor: "pointer" }}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75"
                >
                  <span className="ml-2 text-base">Contact Me</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
