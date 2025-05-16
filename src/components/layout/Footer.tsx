import React from "react";
import Link from "next/link";

const links = [
  { name: "Terms", href: "#" },
  { name: "Privacy", href: "#" },
  { name: "Support", href: "#" },
  { name: "About", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Contact", href: "#" },
];

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-3 lg:space-y-0 py-10 px-2 lg:px-10 bg-white text-black">
      <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0">
        <h1>Magnifico</h1>
        <p className="text-sm">@ 2023. All Rights Reserved.</p>
      </div>
      <ul className="flex flex-wrap items-center justify-center gap-4">
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <li>{link.name}</li>
          </Link>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
