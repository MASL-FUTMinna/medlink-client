"use client";
import { AvailableDate } from "@/types/date";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SelectAppointment = ({
  scheduleData,
  token,
  id
}: {
  scheduleData: AvailableDate[];
  token: string;
  id: string
}) => {
  const router = useRouter();
  const [errors, setErrors] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setErrors(null)
    setSelectedDate(null);
    setSelectedDate(event.target.value);
  };
  const dateFormat = (inputDate) => {
    const readableDate = new Date(inputDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return readableDate;
  };

  const timeFormat = (inputTime) => {
    const formattedTime = new Date(
      `2000-01-01T${inputTime}`
    ).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return formattedTime;
  };

  const handleSubmit = async () => {
    setErrors(null);
    setIsLoading(true);
    if (!token) {
      router.push("/appointments/sign-in");
    } else if (!selectedDate || !selectedTime) {
        setErrors("Please select a date and time")
        setIsLoading(false)
        console.log(selectedDate, selectedTime)
        return;
    }
    try {
      const response = await fetch(
        "https://medlink-server-production.up.railway.app/auth/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.log({ errorData });
        if (errorData.message === "Unauthorized") {
          router.push("/appointments/sign-in");
        }
      }

      const data = await response.json();
        const parsedDate = new Date(selectedDate);

        const day = parsedDate.getDate().toString().padStart(2, '0');
        const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = parsedDate.getFullYear();
        const formattedDate = `${day}-${month}-${year}`;

        const scheduleInfo = {
            userId:`${data.user.id}`,
            practitionerId: id,
            date: formattedDate,
            time: selectedTime,
            timeZone: "Africa/lagos"
          }
      const scheduleAppointment = await fetch("https://medlink-server-production.up.railway.app/appointments",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(scheduleInfo),
      }
      )
      if (!scheduleAppointment.ok) {
        const errorData = await scheduleAppointment.json();
        console.log({ errorData });
      }
      const scheduleResponse = await scheduleAppointment.json();
      setIsLoading(false);
      
      console.log({scheduleResponse})
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };
  return (
    <>
      {scheduleData && (
        <div className="flex flex-col gap-5">
            {errors && <p className="text-red-500">{errors}</p>}
          <label htmlFor="dateSelector">Available Date:</label>
          <select
            id="dateSelector"
            onChange={handleSelect}
            className="py-3 px-6 border border-gray-100 rounded-md outline-none"
          >
            <option value="">Select a date</option>
            {scheduleData.map((item: AvailableDate) => (
              <option key={item.date} value={item.date}>
                {dateFormat(item.date)} {item.day}
              </option>
            ))}
          </select>
          {selectedDate && (
            <>
              <label htmlFor="timeSelector">
                Available time on {dateFormat(selectedDate)}
              </label>
              <select
                id="timeSelector"
                className="py-3 px-6 border border-gray-100 rounded-md outline-none"
                onChange={(event) => setSelectedTime(event.target.value)}
              >
                <option value="">Select a time</option>
                {scheduleData
                  .find((item: AvailableDate) => item.date === selectedDate)
                  ?.timeSlots.map((time: string) => (
                    <option key={time} value={time}>
                      {timeFormat(time)}
                    </option>
                  ))}
              </select>
            </>
          )}
        </div>
      )}
      <div className="flex gap-8">
        <Button className="!px-12" handleClick={handleSubmit} disabled={isLoading}>
          Next
        </Button>
        <Button
          handleClick={() => router.back()}
          leftIcon={
            <Image
              src="/assets/icons/cancel.svg"
              alt="Cancel icon"
              width={20}
              height={20}
            />
          }
          className="bg-transparent !text-[#F44336] underline underline-offset-2"
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default SelectAppointment;
