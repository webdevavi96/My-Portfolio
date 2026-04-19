import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white mt-16 border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">
            <span className="text-white">Avinash</span>
            <span className="text-cyan-400">.dev</span>
          </h2>

          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Crafting modern, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
            Navigation
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-300 hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3">
            Connect
          </h4>

          <div className="flex gap-4 text-lg">
            <a href="https://facebook.com" className="text-gray-400 hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/chaurasiya_ji.20" className="text-gray-400 hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/avinash-chaurasiya-72b648247/" className="text-gray-400 hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 text-center text-gray-500 text-xs py-4">
        © {currentYear} Avinash.dev — All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;