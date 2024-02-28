import React from "react";
import { NavLink } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <div>Brain Inventory</div>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/chat">Chat</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/profile">
            <CircleUserRound />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
