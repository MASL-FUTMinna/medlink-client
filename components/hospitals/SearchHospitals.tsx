"use client";

import { useGetHospitals } from "@/api/hospitals";

import useDisclosure from "@/hooks/useDisclosure";
import { useState } from "react";
import { debouncedOnChange } from "@/utils/helpers";
import { ImSpinner2 } from "react-icons/im";
import Link from "next/link";

type Status = {
  value: string;
  label: string;
};

export function SearchHospitals() {
  const [searchText, setSearchText] = useState<string | null>(null);
  const [inputText, setInputText] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, isLoading } = useGetHospitals(searchText);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputText(value);
    debouncedOnChange(value, setSearchText);
  };

  return (
    <>
      <div className="relative w-full">
        <input
          onFocus={onOpen}
          onBlur={onClose}
          onChange={handleInputChange}
          value={inputText}
          className="px-4  h-[55px] bg-white rounded-[4px] text-sm w-full"
        />

        {isOpen && (
          <div
            onMouseDown={(event) => {
              event.preventDefault();
              event.stopPropagation();
            }}
            className="absolute py-4 w-full min-h-20 max-h-[400px] overflow-y-auto top-16 left-0 z-30 bg-white shadow-md"
          >
            {isLoading && data === undefined ? (
              <div className="h-[120px] w-full flex justify-center items-center">
                <ImSpinner2 className="animate-spin text-secondary repeat-infinite text-[40px]" />
              </div>
            ) : (
              data?.data &&
              data.data.map((hospital) => (
                <Link key={hospital.id} href={`/appointments/${hospital.id}`}>
                  <div
                    key={hospital.id}
                    className="capitalize p-4 hover:bg-secondary/10 cursor-pointer"
                  >
                    <p className="text-sm text-gray-600">{hospital.name}</p>
                    <p className="text-sm font-medium text-secondary">
                      {hospital.address}, {hospital.state}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}
