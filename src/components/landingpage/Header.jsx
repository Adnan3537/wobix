import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='bg-[#F8F8F8]'>
      <div className='wrapper'>
        <div className="flex items-center justify-between py-5">
          <div className='flex space-x-2 items-center'>
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14.5" r="14" fill="black" />
            </svg>
            <h1 className='font-bold'>Logo</h1>
          </div> 
          
          <div className='hidden md:flex text-center'>
            <ul className="flex justify-center space-x-8 text-[#0000004D]">
            <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 py-2 ${isActive ? "text-black font-bold" : "text-gray-600"} hover:text-blue-400`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-4 py-2 ${isActive ? "text-black font-bold" : "text-gray-600"} hover:text-blue-400`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    `px-4 py-2 ${isActive ? "text-black font-bold" : "text-gray-600"} hover:text-blue-400`
                  }
                >
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-4 py-2 ${isActive ? "text-black font-bold" : "text-gray-600"} hover:text-blue-400`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div className='hidden md:flex items-center space-x-2 px-4 py-2 rounded-full border text-[#0000004D]'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.9304 20.6888C19.4604 22.2888 20.6704 22.4488 21.6004 21.0488C22.4504 19.7688 21.8904 18.7188 20.3504 18.7188C19.2104 18.7088 18.5704 19.5988 18.9304 20.6888Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input type="text" placeholder="Search..." className='text-[#0000004D]' />
          </div>
          
          <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
        
        {isOpen && (
          <div className='md:hidden text-center py-4'>
            <ul className="space-y-4 text-[#0000004D]">
            <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 py-2 ${isActive ? "text-black font-bold" : "text-gray-600"} hover:text-blue-400`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-4 py-2 ${isActive ? "text-black font-bold" : "text-gray-600"} hover:text-blue-400`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    `px-4 py-2 ${isActive ? "text-black font-bold" : "text-gray-600"} hover:text-blue-400`
                  }
                >
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-4 py-2 ${isActive ? "text-black font-bold" : "text-gray-600"} hover:text-blue-400`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
