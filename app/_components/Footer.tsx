import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-col container items-center justify-between gap-4 p-5 text-center sm:flex-row ">
        <Link href="/">
          <Image src="/logo.jpg" alt="commuters" width={198} height={98} />
        </Link>
        <p>2024 Commuters. All Rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
