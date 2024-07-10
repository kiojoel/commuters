import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import DashboardNav from "./DashboardNav";

const MobileNav = () => {
  return (
    <nav className="lg:hidden">
      <Sheet>
        <SheetTrigger className="items-center">
          <MenuIcon className="w-8 h-8" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white lg:hidden">
          <Image src="/logo.jpg" alt="commuters" width={198} height={98} />
          <Separator className="border border-gray-50" />
          <DashboardNav />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
