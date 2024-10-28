import Link from "next/link";

import { Button, buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-4xl flex justify-between py-6">
      <Link href={"/"} id="icon" className={buttonVariants({ variant: "noShadow", size: "sm" })}>
        {"jateez"}
      </Link>
      <div className="flex justify-end space-x-4">
        <Link href={"/"} className={buttonVariants({ variant: "reverseNoShadow", size: "sm" })}>
          about
        </Link>
        <Link href={"/projects"} className={buttonVariants({ variant: "reverseNoShadow", size: "sm" })}>
          projects
        </Link>
        <Link href={"/experiences"} className={buttonVariants({ variant: "reverseNoShadow", size: "sm" })}>
          experiences
        </Link>
        <Link href={"/blogs"} className={buttonVariants({ variant: "reverseNoShadow", size: "sm" })}>
          blogs
        </Link>
      </div>
      <div className="">
        <Button variant={"default"} size={"sm"}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
            <path
              d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>{" "}
          resume
        </Button>
      </div>
    </nav>
  );
}
