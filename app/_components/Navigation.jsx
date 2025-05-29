import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <div className="space-x-5">
      {/* <h1>Good Day</h1> */}
      <Link href={"/about"} className="font-bold">
        About
      </Link>
      <Link href={"/contact"} className="font-bold">
        Contact
      </Link>
      <Link href={"/product"} className="font-bold">
        Product Page
      </Link>
      <Link href={"/todo"} className="font-bold">
        Todo page
      </Link>
    </div>
  );
}
