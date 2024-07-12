"use client";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/constant";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MobileNav = () => {
  const path = usePathname();
  useEffect(() => {}, [path]);
  return (
    <nav className="flex md:hidden">
      <Sheet>
        <SheetTrigger className="items-center">
          <MenuIcon className="w-5 h-5" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white">
          <Image src="/logo.jpg" alt="commuters" width={198} height={98} />
          <Separator className="border border-gray-50" />
          <div className="p-5 flex flex-col gap-5">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary
              ${path == item.href && "bg-gray-200 text-gray-900"}`}
              >
                <item.icon className="mr-2 w-4 h-4" />
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
