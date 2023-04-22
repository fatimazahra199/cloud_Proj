import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white">
      <p>FATIMA</p>
      <nav>
        <ul className="flex items-center space-x-4">
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
            Home
          </li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
            About
          </li>
          <li className="text-gray-600 hover:text-gray-900 cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
