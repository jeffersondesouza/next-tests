import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/" title="Go to about">
        <a>Home</a>
      </Link>
      <Link href="/about" title="Go to about">
        <a>About Page</a>
      </Link>
    </header>
  );
};

export default Header;
