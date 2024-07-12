import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DashBoard = () => {
  return (
    <div className="grid items-start gap-y-8">
      <main className="flex flex-1 min-h-[400px] flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center justify-between">
          <div className="grid gap-1">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
            <p className="text-lg text-muted-foreground ">
              Here you can see and create new events
            </p>
          </div>
          <Button asChild>
            <Link href="/events/create">Create Event</Link>
          </Button>
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no events
            </h3>
            <p className="text-sm text-muted-foreground">
              You can see events as soon as you create on.
            </p>
            <Button asChild>
              <Link href="/events/create">Create Event</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
