import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function AppointmentsSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-6 items-center  lg:flex-row">
          <Skeleton className="w-full lg:w-2/5 h-40 bg-slate-200"></Skeleton>

          <div className="space-y-4 w-full">
            <Skeleton className="w-full h-4 bg-slate-200"></Skeleton>
            <Skeleton className="w-full h-4 bg-slate-200"></Skeleton>
            <Skeleton className="w-1/2 h-4 bg-slate-200"></Skeleton>
            <Skeleton className="w-1/2 h-4 bg-slate-200"></Skeleton>
          </div>
        </div>
      ))}
    </>
  );
}
