import React from "react";
import { Skeleton } from "../ui/skeleton";
import SelectAvailableTimeSkeleton from "./SelectAvailableTimeSkeleton";

export default function PractionerDetailsSkeleton() {
  return (
    <div className="section grid grid-cols-11 gap-8 h-[80vh] w-full">
      <div className="col-span-5 h-full  ">
        <Skeleton className=" bg-slate-200 h-full" />
      </div>

      <div className="col-span-6 space-y-12">
        <Skeleton className="h-5 w-3/5 mb-5 bg-slate-200"></Skeleton>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full bg-slate-200"></Skeleton>
          <Skeleton className="h-4 w-full bg-slate-200"></Skeleton>
          <Skeleton className="h-4 w-full bg-slate-200"></Skeleton>
          <Skeleton className="h-4 w-8/12 bg-slate-200"></Skeleton>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-full bg-slate-200"></Skeleton>
          <Skeleton className="h-4 w-full bg-slate-200"></Skeleton>
          <Skeleton className="h-4 w-full bg-slate-200"></Skeleton>
          <Skeleton className="h-4 w-8/12 bg-slate-200"></Skeleton>
        </div>

        <SelectAvailableTimeSkeleton />
      </div>
    </div>
  );
}
