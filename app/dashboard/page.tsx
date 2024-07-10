import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashBoard = () => {
  return (
    <div className="grid items-start gap-y-8">
      <div className="hidden sm:flex items-center justify-between px-4">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-4xl mt-2">Dashboard</h1>
          <p className="text-lg text-muted-foreground ">
            Here you can see and create new events
          </p>
        </div>

        <Button asChild>
          <Link href="/dashboard/create-new">Create Event</Link>
        </Button>
      </div>

      <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border p-8 my-5 mx-5 border-dashed text-center animate-in fade-in-50">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <CalendarPlus className="w-10 h-10 text-primary" />
        </div>

        <h2>You dont have any event yet!</h2>
        <p className="mt-2 mb-8 text-center text-sm leading-6 text-muted-foreground max-w-sm mx-auto">
          Create an event so that you can see them right here
        </p>
        <Button asChild>
          <Link href="/dashboard/create-new">Create Event</Link>
        </Button>
      </div>
    </div>
  );
};

export default DashBoard;
