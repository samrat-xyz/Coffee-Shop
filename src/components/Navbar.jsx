// components/Navbar.jsx
import React, { useState } from "react";
import { Link,  useLocation } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // Active link detect করার জন্য

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const menuItems = ["About", "Menu", "Order Online"];

  return (
    <header className="noto-serif relative bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          <Link to='/'>
            Coffee Haven
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          {menuItems.map((item) => {
            const path = `/${item.toLowerCase().replace(" ", "")}`;
            const isActive = location.pathname === path;
            return (
              <li key={item} className="relative group">
                <Link
                  to={path}
                  className={`hover:text-purple-500 transition ${
                    isActive ? "text-purple-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  {item}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full ${
                    isActive ? "w-full" : ""
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden text-2xl text-gray-700"
          onClick={toggleMobileMenu}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="md:hidden bg-white w-full flex flex-col items-center gap-4 py-6 shadow-lg">
          {menuItems.map((item) => {
            const path = `/${item.toLowerCase().replace(" ", "")}`;
            const isActive = location.pathname === path;
            return (
              <li key={item}>
                <Link
                  to={path}
                  className={`block py-2 px-4 rounded-lg transition ${
                    isActive
                      ? "bg-purple-100 text-purple-600 font-semibold"
                      : "text-gray-700 hover:bg-purple-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
