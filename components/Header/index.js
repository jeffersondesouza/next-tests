import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a title="Go to Home">Home</a>
      </Link>
      <Link href="/about">
        <a title="Go to about">About Page</a>
      </Link>
    </header>
  );
};

export default Header;
