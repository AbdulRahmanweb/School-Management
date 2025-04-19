import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="text-white mt-2 border">
      <ul className="flex gap-4 p-4">
        <li>
          <NavLink
            to="/admin/dashboard"
            end
            className={({ isActive }) =>
              isActive ? "text-green-400 underline font-semibold" : "text-white"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/dashboard/classes"
            className={({ isActive }) =>
              isActive ? "text-green-400 underline font-semibold" : "text-white"
            }
          >
            Classes
          </NavLink>
        </li>
      </ul>
    </nav>
	);
}

export default Navbar;
