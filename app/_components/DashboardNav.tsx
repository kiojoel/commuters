"use client";
import { navItems } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";


const DashboardNav = () => {
  const path = usePathname();
  useEffect(() => {}, [path]);
  return (
    <nav className="h-screen">
      <div className="p-5">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center gap-3 p-3 hover:bg-gray-200 text-gray-500 hover:text-black rounded-md mb-3 font-medium
              ${path == item.href && "bg-gray-200 text-gray-900"}`}
          >
            <item.icon className="mr-2 w-4 h-4" />
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default DashboardNav;
