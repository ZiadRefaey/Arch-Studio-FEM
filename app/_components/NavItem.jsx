import Link from "next/link";
import React from "react";

export default function NavItem({ children, linkTo = "/" }) {
  return (
    <Link
      href={linkTo}
      className="text-body font-bold duration-150 transition-all cursor-pointer text-medium-gray hover:text-very-dark-blue"
    >
      {children}
    </Link>
  );
}
