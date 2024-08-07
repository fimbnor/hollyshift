import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-black">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src="src/images/logo.png"
                alt="Logo"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >LetMeAd</span
              >
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className="text-white bg-black hover:bg-indigo-900 hover:text-white rounded-md px-3 py-2"
                  >Home</NavLink>
                <NavLink
                  to="/jobs"
                  className="text-white hover:bg-indigo-900 hover:text-white rounded-md px-3 py-2"
                  >Check Profiles</NavLink>
                <NavLink
                  to="/add-job"
                  className="text-white hover:bg-indigo-900 hover:text-white rounded-md px-3 py-2"
                  >Add Your Profile</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;