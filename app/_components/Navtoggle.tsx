"use client";

import React from "react";

export default function Navtoggle() {
  return (
    <button
      className="md:hidden"
      onClick={() =>
        document.getElementById("nav-items")?.classList.toggle("hidden")
      }
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
}
