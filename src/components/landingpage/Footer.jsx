/** @format */

import React from "react";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg- text-black pt-18 pb-10">
      <div className="container wrapper grid grid-cols-1 md:grid-cols-4 gap-8 pb-[40px]">
        {/* Company Section */}
        <div>
          <h2 className="mb-4">COMPANY</h2>
          <ul className="space-y-2">
            <li><NavLink to="/" className="text-gray-400 transition text-[14px] mb-[16px ">Home</NavLink></li>
                       <li><NavLink to="/about" className="text-gray-400 transition text-[14px] mb-[16px">About</NavLink></li>
                       <li><NavLink to="/product" className="text-gray-400 transition text-[14px] mb-[16px">Product</NavLink></li>
                       <li><NavLink to="/contact" className="text-gray-400 transition text-[14px] mb-[16px">Contact</NavLink></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className=" mb-4">QUICK LINKS</h2>
          <p className="text-gray-400 text-[14px] mb-[16px]">Terms & Conditions.</p>
          <p className="text-gray-400 text-[14px]">Privacy Policy.</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className=" mb-4">SOCIAL MEDIA</h2>
          <div className="flex flex-col space-x-4">
            <a
              href="#"
              className="text-gray-400  transition text-[14px]  mb-[16px]"
            >
              Youtube
            </a>
            <a
              href="#"
              className="text-gray-400  transition text-[14px] mb-[16px]"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 transition text-[14px]   mb-[16px]"
            >
              X
            </a>
            <a
              href="#"
              className="text-gray-400  transition text-[14px]  mb-[16px]"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-400 transition text-[14px]"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Available Platforms Section */}
        <div>
          <h2 className=" mb-4">AVAILABLE PLATFORMS</h2>
          <ul className="space-y-2">
            <li>
              <span className="text-gray-400 text-[14px] mb-[16px]">AppStore</span>
            </li>
            <li>
              <span className="text-gray-400 text-[14px] ">PlayStore</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-left text-gray-400 text-sm wrapper">
        © {new Date().getFullYear()} Wrapp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
