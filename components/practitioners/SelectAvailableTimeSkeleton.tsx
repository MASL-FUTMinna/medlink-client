import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function SelectAvailableTimeSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-8 rounded-sm bg-slate-200" />
      <Skeleton className="h-8 rounded-sm bg-slate-200" />
    </div>
  );
}
