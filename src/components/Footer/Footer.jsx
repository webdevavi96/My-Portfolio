import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col sm:flex-col md:flex-row justify-between flex-wrap gap-8 px-4">
        {/* Logo / Brand */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-xl sm:text-2xl font-bold">MyPortfolio</h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Building modern web experiences
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2 text-base sm:text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2 text-base sm:text-lg">Follow Me</h4>
          <div className="flex gap-4 text-xl sm:text-2xl">
            <a href="https://facebook.com" className="hover:text-blue-600 transition-colors"><FaFacebook /></a>
            <a href="https://twitter.com" className="hover:text-blue-400 transition-colors"><FaTwitter /></a>
            <a href="https://instagram.com" className="hover:text-pink-500 transition-colors"><FaInstagram /></a>
            <a href="https://linkedin.com" className="hover:text-blue-700 transition-colors"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs sm:text-sm">
        © {currentYear} MyPortfolio. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
