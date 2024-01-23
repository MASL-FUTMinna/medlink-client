"use client";
import { AvailableDate } from "@/types/date";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Root } from "@/types/appointment";

const dateFormat = (inputDate) => {
  const readableDate = new Date(inputDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return readableDate;
};

const timeFormat = (inputTime) => {
  const formattedTime = new Date(`2000-01-01T${inputTime}`).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
  );
  return formattedTime;
};

interface token {
  name : string
  value: string
}


const SelectAppointment = ({
  scheduleData,
  token,
  id,
}: {
  scheduleData: AvailableDate[];
  token: token;
  id: string;
}) => {

  const router = useRouter();
  const [errors, setErrors] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Root>(null);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setErrors(null);
    setSelectedDate(null);
    setSelectedDate(event.target.value);
  };
  console.log(token)

  const handleSubmit = async () => {
    setErrors(null);
    setIsLoading(true);
    if (!token) {
      router.push("/appointments/sign-in");
    } else if (!selectedDate || !selectedTime) {
      setErrors("Please select a date and time");
      setIsLoading(false);
      console.log(selectedDate, selectedTime);
      return;
    }
    try {
      const response = await fetch(
        "https://medlink-server-production.up.railway.app/auth/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token.value}`,
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

      const day = parsedDate.getDate().toString().padStart(2, "0");
      const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
      const year = parsedDate.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;

      const scheduleInfo = {
        userId: `${data.user.id}`,
        practitionerId: id,
        date: formattedDate,
        time: selectedTime,
        timeZone: "Africa/lagos",
      };
      const scheduleAppointment = await fetch(
        "https://medlink-server-production.up.railway.app/appointments",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.value}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(scheduleInfo),
        }
      );
      if (!scheduleAppointment.ok) {
        const errorData = await scheduleAppointment.json();
        setErrors(errorData.message);
        console.log({ errorData });
      }
      const scheduleResponse = await scheduleAppointment.json();
      setModalData(scheduleResponse);
      setIsLoading(false);
      setIsSuccessModalOpen(true);
      console.log({ scheduleResponse });
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
    router.push("/appointments/history");
  };

  return (
    <>
      {isSuccessModalOpen && (
        <SuccessModal
          closeModal={handleSuccessModalClose}
          scheduleResponse={modalData}
        />
      )}
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
        <Button
          className="!px-12"
          handleClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Book"}
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

const SuccessModal = ({ closeModal, scheduleResponse }) => {
  console.log({ scheduleResponse });
  console.log(scheduleResponse.id);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md flex justify-center items-center flex-col">
        <div className="bg-indigo-500 p-3 rounded-full mb-3">
          <Image
            src="/assets/icons/charm_tick.svg"
            alt="tick"
            width={40}
            height={40}
          />
        </div>
        <p className="text-center text-black text-[32px] font-bold mb-3">
          Booking Confirmed!
        </p>
        <p className="mb-4 text-center text-neutral-600 text-[15px] font-normal tracking-tight">
          The booking confirmation has been sent to your Email Address
        </p>
        <hr />
        <div className="mt-8 items-center gap-4 flex justify-center flex-col">
          <p className="text-center text-indigo-500 text-base font-semibold">
            Booking ID - {scheduleResponse.id}
          </p>
          <Image
            src={scheduleResponse.practitioner.photoUrl}
            alt={scheduleResponse.practitioner.first_name}
            width={80}
            height={80}
          />
          <div className="items-center gap-2 flex justify-center">
            <div className="text-center text-neutral-500 text-sm font-medium flex justify-center items-center gap-2">
              <Image
                src="/assets/icons/symbols_calendar.svg"
                alt="calendar"
                width={15}
                height={15}
              />
              {dateFormat(scheduleResponse.date)}
            </div>
            <div className="rotate-90 border border-neutral-400 w-6"></div>
            <div className="text-center text-neutral-500 text-sm font-medium flex justify-center items-center gap-2">
              <Image
                src="/assets/icons/access-time.svg"
                alt="time"
                width={15}
                height={15}
              />
              {timeFormat(scheduleResponse.time)}
            </div>
          </div>
        </div>

        <Button
          handleClick={closeModal}
          className="mt-4 p-2.5 bg-indigo-500 rounded text-white text-xl font-bold w-full text-center flex justify-center items-center"
        >
          Done
        </Button>
      </div>
    </div>
  );
};
