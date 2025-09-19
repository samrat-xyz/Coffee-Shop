import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="poppins-light relative h-screen bg-[url('https://t4.ftcdn.net/jpg/03/26/12/23/360_F_326122335_RKvTXMb4RYkIzk94ZoPjkZQe2CUOVnen.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0"></div>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-slideUp">
          Welcome to Coffee Haven
        </h1>
        <p className="text-lg md:text-2xl mb-6 text-gray-200 animate-slideUp delay-200">
          Experience the best coffee in town
        </p>
        <Link
          to="/menu"
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 animate-slideUp delay-300"
        >
          Explore Menu
        </Link>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </header>
  );
}

export default Header;
