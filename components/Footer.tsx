import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-black px-6 md:px-20 pt-8">
      <div className="container mx-auto px-4 py-4 border-t-2 border-black">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-primary">Theek Theek Laga Lo <span className="text-black">(TL2)</span></div>
          <div className="flex gap-4">
            <a href="https://github.com/why-deepanshux" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://x.com/why_deepanshu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/deepanshu-sharma-449b661ba/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-6 text-sm text-center">
          &copy; {new Date().getFullYear()} Made with &#10084; By Deepanshu Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
