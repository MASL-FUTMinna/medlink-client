import { subtle } from "crypto";
import React, { PropsWithChildren } from "react";

interface AuthCardProps extends PropsWithChildren {
  title: string;
  subtitle: string;
}

export default function AuthCard({ children, title, subtitle }: AuthCardProps) {
  return (
    <div className="px-6 flex flex-col gap-4 md:px-16 md:w-1/2 w-full p-16 rounded-md border border-zinc-900 border-opacity-5 my-10">
      <h1 className="text-zinc-900 text-center font-medium text-4xl lg:text-5xl tracking-tight">
        {title}
      </h1>
      <p className="text-center text-zinc-900 text-base font-normal leading-snug tracking-tight">
        {subtitle}
      </p>
      {children}
    </div>
  );
}
