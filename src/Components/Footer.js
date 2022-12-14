import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-[#040c2c] shadow md:flex md:items-center md:justify-between md:p-6 ">
        <span className="text-sm text-white sm:text-center">
          © 2022 Aashirbad Sabat™. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
