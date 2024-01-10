"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Prop = {
  id: string;
  name: string;
  hospital: string;
  profession: string;
  img: string;
};

const Practioner = ({ id, name, hospital, profession, img }: Prop) => {
  const router = useRouter();

  return (
    <li
      className="font-head cursor-pointer"
      onClick={() => router.push(`/appointments/${id}`)}
    >
      <Image
        src={img}
        alt={`Headshot of ${name}`}
        width={300}
        height={600}
        className="w-full"
      />
      <h3>Dr. {name}</h3>
      <div className="flex gap-2">
        <Image
          src="/assets/icons/hospital.svg"
          alt="Hospital building icon"
          width={20}
          height={20}
        />
        <p className="text-[#7A7A7A] text-xs">
          {profession} at <span className="uppercase">{hospital}</span>
        </p>
      </div>
    </li>
  );
};

export default Practioner;
