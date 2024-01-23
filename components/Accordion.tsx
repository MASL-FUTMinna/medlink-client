"use client";

import Image from "next/image";
import { useState } from "react";

type Prop = {
  question: string;
  answer?: string;
  services?: {
    description: string;
  }[];
};

const Accordion = ({ question, answer, services }: Prop) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section
      className={`rounded-lg px-4 flex flex-col ${
        isExpanded ? "bg-[#F4F2FF]" : "bg-[var(#1b1b1b0d,#fff)]"
      }  border border-[var(#1B1B1B,#1b1b1b0d)]`}
    >
      <div
        className="flex justify-between items-center cursor-pointer py-4"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <p className="font-semibold text-lg">{question}</p>
        <Image
          src="/assets/icons/down-arrow.svg"
          alt="down arrow icon"
          width={30}
          height={30}
          className={`duration-300 ${isExpanded ? "-rotate-180" : ""}`}
        />
      </div>
      <div
        className={`overflow-hidden ${
          isExpanded ? " max-h-[400px]" : "max-h-[0px]"
        } duration-300`}
      >
        
        {answer &&<p className="font-medium pb-4">{answer}</p>}
          {services && (
            <ul className="list-disc list-inside font-medium pb-4">
              {services.map((service, index) => (
                <li key={index} className="font-medium text-sm">
                  {service.description}
                </li>
              ))}
            </ul>
          )}
      </div>
    </section>
  );
};

export default Accordion;
