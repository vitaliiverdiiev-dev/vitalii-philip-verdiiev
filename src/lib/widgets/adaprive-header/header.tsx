"use client";

import { cn } from "@/shared";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
      <div className="container flex justify-between items-center">
        <Link href="/">Phil</Link>

        <button
          onClick={toggleMenu}
          className={cn(
            "block size-10 rounded-full",
            isOpen ? "bg-red-500" : "bg-green-500"
          )}
        />

        <nav className={cn(isOpen ? "hidden" : "block")}>
          <ul>
            <li>
              <Link href="/home" className="nav__link">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
