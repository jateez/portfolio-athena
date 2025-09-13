"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { buttonVariants } from "./ui/button";
import { CV_URL } from "../const.ts";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#fff4e0]/80 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl py-6">
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            id="icon"
            className={buttonVariants({
              variant: "jateez",
              size: "sm",
              className: "hidden md:flex",
            })}
          >
            <h1 className={`text-md md:text-xl font-extrabold tracking-tight font-dm hover:text-[#eeef9e]`}>jateez</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href={"/"}
              className={buttonVariants({
                variant: pathname == "/" ? "neutralNoShadow" : "reverseNoShadow",
                size: "sm",
              })}
            >
              about
            </Link>
            <Link
              href={"/projects"}
              className={buttonVariants({
                variant: pathname == "/projects" ? "neutralNoShadow" : "reverseNoShadow",
                size: "sm",
              })}
            >
              projects
            </Link>
            <Link
              href={"/experiences"}
              className={buttonVariants({
                variant: pathname == "/experiences" ? "neutralNoShadow" : "reverseNoShadow",
                size: "sm",
              })}
            >
              experiences
            </Link>
            {/*
            <Link
              href={"/blogs"}
              className={buttonVariants({
                variant: pathname == "/blogs"
                  ? "neutralNoShadow"
                  : "reverseNoShadow",
                size: "sm",
              })}
            >
              blogs
            </Link>
            */}
          </div>
          <Link
            href={CV_URL}
            download={true}
            className={buttonVariants({
              variant: "default",
              size: "sm",
              className: "hidden md:flex",
            })}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path
                d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            resume
          </Link>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden mx-1 p-1.5 rounded-lg hover:bg-main transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isMenuOpen ? "flex" : "hidden"} md:hidden mx-2 flex-col space-y-3 pt-2 pb-3`}>
        <Link
          href={"/"}
          className={buttonVariants({
            variant: pathname == "/" ? "neutralNoShadow" : "reverseNoShadow",
            size: "sm",
            className: "w-full justify-center",
          })}
        >
          about
        </Link>
        <Link
          href={"/projects"}
          className={buttonVariants({
            variant: pathname == "/projects" ? "neutralNoShadow" : "reverseNoShadow",
            size: "sm",
            className: "w-full justify-center",
          })}
        >
          projects
        </Link>
        <Link
          href={"/experiences"}
          className={buttonVariants({
            variant: pathname == "/experiences" ? "neutralNoShadow" : "reverseNoShadow",
            size: "sm",
            className: "w-full justify-center",
          })}
        >
          experiences
        </Link>
        <Link
          href={"/blogs"}
          className={buttonVariants({
            variant: pathname == "/blogs" ? "neutralNoShadow" : "reverseNoShadow",
            size: "sm",
            className: "w-full justify-center",
          })}
        >
          blogs
        </Link>
        <Link
          href={CV_URL}
          download={true}
          onClick={() => setIsMenuOpen(false)}
          className={buttonVariants({
            variant: "default",
            size: "sm",
            className: "w-full justify-center",
          })}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
            <path
              d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          resume
        </Link>
      </div>
    </nav>
  );
}
