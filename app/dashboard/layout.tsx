import { ReactNode } from "react";
import DashboardNav from "../_components/DashboardNav";
import { SignedIn } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SignedIn>
      <div className="flex">
        <div className="hidden md:flex">
          <DashboardNav />
        </div>
        <div className=" flex-1">{children}</div>
      </div>
    </SignedIn>
  );
};

export default DashboardLayout;
