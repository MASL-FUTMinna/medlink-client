import React from "react";

export default function PageTitle({ title }: { title: string }) {
  return (
    <section className="section py-12 bg-slate-50">
      <p className=" text-black text-4xl font-semibold">{title}</p>
    </section>
  );
}
