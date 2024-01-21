"use client";
import { AvailableDate } from "@/types/date";
import { useState } from "react";

const SelectAppointment = ({
    scheduleData,
}: {
    scheduleData: AvailableDate[];
}) => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const handleSelect =  (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDate(null)
        setSelectedDate(event.target.value)
    }
    const dateFormat = (inputDate) => {
        const readableDate = new Date(inputDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        return readableDate;
    };

    const timeFormat = (inputTime) => {
        const formattedTime = new Date(`2000-01-01T${inputTime}`).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          });
          return formattedTime;
    }

    return (
        <div className="flex flex-col gap-5">
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
                    <label htmlFor="timeSelector">Available time on {dateFormat(selectedDate)}</label>
                    <select
                        id="timeSelector"
                        className="py-3 px-6 border border-gray-100 rounded-md outline-none"
                        onChange={(event) => setSelectedTime(event.target.value)}
                    >
                        <option value="">Select a time</option>
                        {
                             scheduleData.find((item: AvailableDate) => item.date === selectedDate)
                                ?.timeSlots.map((time: string) => 
                                            <option key={time} value={time}>
                                                {timeFormat(time)}
                                            </option>
                                        )
                        }
                    </select>
                </>
            )}
        </div>
    );
};

export default SelectAppointment;
