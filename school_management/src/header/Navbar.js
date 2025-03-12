import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-5 mt-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  const mobileScreenView = () => {
    setShow(!show);
  };

  return (
    <header className="bg-blue-900 text-white fixed text-lg top-0 w-full h-20 z-50 px-10">
      <nav className="flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <div>
          <Link className="text-3xl font-bold text-white" to="/">
            KodeBloom
          </Link>
        </div>

        {/* Desktop View */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link className="hover:bg-blue-700 px-3 py-2 rounded" to="/">
              Home
            </Link>
          </li>
          <li className="relative group">
            <span className="cursor-pointer flex gap-3 hover:bg-blue-700 px-3 py-2 rounded">
              About {arrow}
            </span>
            <ul className="absolute hidden group-hover:block bg-white text-blue-900 p-3 mt-0.5 shadow-lg rounded">
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/history">
                  History
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/ourinspiration">
                  Our Inspiration
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/corevalues">
                  Core Values
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/principal">
                  Principal
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/annualreport">
                  Annual Report
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="hover:bg-blue-700 px-3 py-2 rounded" to="/facilities">
              Facilities
            </Link>
          </li>
          <li>
            <Link className="hover:bg-blue-700 px-3 py-2 rounded" to="/department">
              Department
            </Link>
          </li>
          <li>
            <Link className="hover:bg-blue-700 px-3 py-2 rounded" to="/contact">
              Contact
            </Link>
          </li>
          <li className="relative group">
            <span className="cursor-pointer flex gap-2 hover:bg-blue-700 px-3 py-2 rounded">
              Login {arrow}
            </span>
            <ul className="absolute hidden group-hover:block bg-white text-blue-900 mt-0.5 shadow-lg rounded right-0 p-3">
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/login/student">
                  Parent/Student Login
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/login/teacher">
                  Teacher/Principal Login
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/login/admin">
                  Admin Login
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Mobile View Button */}
        <div className="md:hidden flex flex-col items-center justify-center gap-1 border-2 rounded-lg p-1.5 cursor-pointer" onClick={mobileScreenView}>
          <span className="w-7 h-[3px] bg-white"></span>
          <span className="w-7 h-[3px] bg-white"></span>
          <span className="w-7 h-[3px] bg-white"></span>
        </div>
      </nav>

      {/* Mobile View Menu */}
      {show && (
        <div className="bg-[rgba(0,0,0,0.7)]">
          <ul className="flex flex-col gap-3 md:hidden py-5 pl-6">
            <li>
              <Link className="block hover:bg-blue-600 px-3 py-2 mr-5" to="/" onClick={mobileScreenView}>
                Home
              </Link>
            </li>
            <li className="relative group">
              <span className="cursor-pointer flex gap-3 hover:bg-blue-600 px-3 py-2 mr-5">
                About {arrow}
              </span>
              <ul className="hidden group-hover:block p-3 mt-0.5 shadow-lg">
                <li>
                  <Link className="block px-4 py-2 hover:bg-blue-600" to="/history" onClick={mobileScreenView}>
                    History
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-blue-600" to="/ourinspiration" onClick={mobileScreenView}>
                    Our Inspiration
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-blue-600" to="/corevalues" onClick={mobileScreenView}>
                    Core Values
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-blue-600" to="/principal" onClick={mobileScreenView}>
                    Principal
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-blue-600" to="/annualreport" onClick={mobileScreenView}>
                    Annual Report
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="block hover:bg-blue-600 px-3 py-2" to="/facilities" onClick={mobileScreenView}>
                Facilities
              </Link>
            </li>
            <li>
              <Link className="block hover:bg-blue-600 px-3 py-2 mr-5" to="/department" onClick={mobileScreenView}>
                Department
              </Link>
            </li>
            <li>
              <Link className="block hover:bg-blue-600 px-3 py-2 mr-5" to="/contact" onClick={mobileScreenView}>
                Contact
              </Link>
            </li>
            <li className="relative group">
              <span className="cursor-pointer flex gap-2 hover:bg-blue-600 px-3 py-2 mr-5">
                Login {arrow}
              </span>
              <ul className="hidden group-hover:block mt-0.5 shadow-lg p-3">
                <li>
                  <Link className="block px-4 py-2 hover:bg-blue-600" to="/login/student" onClick={mobileScreenView}>
                    Parent/Student Login
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-blue-600" to="/login/teacher" onClick={mobileScreenView}>
                    Teacher/Principal Login
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-blue-600" to="/login/admin" onClick={mobileScreenView}>
                    Admin Login
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
