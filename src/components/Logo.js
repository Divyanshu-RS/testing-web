import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Logo = () => {
  return (
    <div className="w-full flex items-center justify-between absolute top-[1.5rem] px-6">
      {/* CryptoBucks Logo on the Left */}
      <Link to="/" className="text-lg text-cyan flex items-center">
        <img src={logoSvg} alt="CryptoBucks" className="mr-2" />
        <span>CryptoBucks</span>
      </Link>

      {/* GitHub Button on the Right */}
      <a
        href="https://github.com/Divyanshu-RS" // Replace with your GitHub URL
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-3 py-1 border border-cyan rounded-lg bg-gray-200 hover:bg-gray-300
                   dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white text-cyan transition-colors"
      >
        <FaGithub className="mr-2" /> {/* GitHub icon */}
        About The Developer
      </a>
    </div>
  );
};

export default Logo;
