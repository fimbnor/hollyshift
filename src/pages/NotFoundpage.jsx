import React from "react";
import { NavLink } from 'react-router-dom'
import { FaExclamationTriangle } from "react-icons/fa";
const NotFoundpage = () => {
  return (
    <section class="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle class="text-yellow-400 text-6xl mb-4"></FaExclamationTriangle>
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <NavLink
        to="/"
        class="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </NavLink>
    </section>
  );
};

export default NotFoundpage;
