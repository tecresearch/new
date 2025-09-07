import React from "react";
import HRLogo from "../assets/HRLogo.png";
import UserProfile from "../assets/UserProfile.png";
import { Settings, Bell } from "lucide-react";

const navItems = [
  { name: "My Tasks", active: true },
  { name: "History" },
  { name: "Analytics" },
];

const Navbar = () => (
  <nav className="flex items-center justify-between bg-white px-8 lg:px-32 py-3 shadow">
    <div className="flex items-center">
      <img src={HRLogo} alt="HR Logo" className="h-auto w-10 mr-2" />
    </div>
    <div className="hidden lg:flex space-x-1">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`px-4 py-2 rounded-lg font-bold transition
            ${
              item.active
                ? "bg-[#E9FBEF] text-green-600"
                : "text-neutral-500 hover:bg-neutral-100"
            }
          `}
        >
          {item.name}
        </button>
      ))}
    </div>
    <div className="flex items-center space-x-4">
      <Settings className="w-5 h-5 text-neutral-500 cursor-pointer mx-1" />
      <Bell className="w-5 h-5 text-neutral-500 cursor-pointer mx-1" />
      <img
        src={UserProfile}
        alt="User Profile Icon"
        className="h-auto w-10 cursor-pointer"
      />
    </div>
  </nav>
);

export default Navbar;
