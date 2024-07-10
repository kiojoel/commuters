"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <header className="p-5 border-b shadow-sm sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between ">
        <Link href="/">
          <Image
            src={"/logo.jpg"}
            width={250}
            height={150}
            alt="commuters"
            className="w-auto"
          />
        </Link>
        {isSignedIn ? (
          <div className="flex items-center gap-4">
            <Button variant="outline">
              Upgrade <Zap className="ml-1" />
            </Button>
            <UserButton />
            <MobileNav />
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <Link href={"/dashboard"}>
              <Button>Login</Button>
            </Link>

            <Link href={"/dashboard"}>
              <Button variant="outline">Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
