import Image from "next/image";

export default function Partners() {
  return (
    <section className="bg-violet-50 py-10 section w-full flex flex-col md:flex-row items-center justify-center gap-8">
      <p className="block max-w-[300px] text-neutral-700 text-base font-medium font-head">{`We're have been recognized by Leading Health Publications and Organizations.`}</p>
      <div className="flex items-center justify-center overflow-x-auto no-scrollbar w-full pl-10">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Image
              src="/assets/images/hbr.png"
              alt="Partners"
              width={150}
              height={75}
              key={i}
            />
          ))}
      </div>
    </section>
  );
}
