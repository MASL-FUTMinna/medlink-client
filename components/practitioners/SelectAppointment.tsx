"use client";

import { AvailableDate } from "@/types/date";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useGetPractionerAvailability } from "@/api/practitioner";
import SelectAvailableTimeSkeleton from "./SelectAvailableTimeSkeleton";
import { useForm } from "react-hook-form";
import {
  BookAppointmentSchemaType,
  bookAppointmentSchema,
} from "@/schemas/appointmentsSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { convertDateFormat, dateFormat, timeFormat } from "@/utils/helpers";
import { useAuthContext } from "@/providers/AuthProvider";
import { useToast } from "../ui/use-toast";
import BookingSuccess from "./BookingSuccess";
import useDisclosure from "@/hooks/useDisclosure";
import {
  useBookAppointment,
  useRescheduleAppointment,
} from "@/api/appointments";
import config from "@/utils/config";
import { useBookingContext } from "@/providers/BookAppointmentProvider";

const SelectAppointment = ({ id }: { id: string }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [appointmentDetails, setAppointmentDetails] =
    useState<AppointmentType | null>(null);
  const { data: scheduleData, isLoading } = useGetPractionerAvailability(id);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { isLoggedIn, user } = useAuthContext();
  const { toast } = useToast();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const appoitmentId = searchParams.get("appointmentId");
  const { setAppointment, appointmentObj } = useBookingContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookAppointmentSchemaType>({
    resolver: yupResolver(bookAppointmentSchema),
    defaultValues: appointmentObj,
  });

  useEffect(() => {
    setSelectedDate(watch("date"));
  }, [watch("date")]);

  const { isPending, mutate, data } = useBookAppointment();
  const {
    isPending: rescheduling,
    mutate: reschedule,
    data: rescheduleData,
  } = useRescheduleAppointment();

  useEffect(() => {
    if (data || rescheduleData) {
      setAppointmentDetails(data || rescheduleData || null);
      onOpen();
    }
  }, [data, rescheduleData]);

  const onSubmit = (data: BookAppointmentSchemaType) => {
    if (!isLoggedIn || !user?.id) {
      toast({ description: "Please sign in to continue", variant: "error" });
      localStorage.setItem(config.key.redirect, pathname);
      setAppointment(data);
      router.push("/auth/sign-in");
      return;
    }
    const payload: AppointmentPayload = {
      ...data,
      date: convertDateFormat(data.date),
      practitionerId: id,
      timeZone: "Africa/lagos",
      userId: user.id.toString(),
    };

    if (appoitmentId) {
      reschedule({
        payload,
        appointmentId: appoitmentId,
      });
    } else {
      mutate(payload);
    }
  };

  const handleClose = () => {
    onClose();
    setAppointment({
      date: "",
      time: "",
    });
    router.push("/appointments/history");
  };

  return (
    <>
      {isOpen && appointmentDetails && (
        <BookingSuccess
          onClose={handleClose}
          isOpen={isOpen}
          scheduleResponse={appointmentDetails}
        />
      )}
      {isLoading ? (
        <SelectAvailableTimeSkeleton />
      ) : (
        scheduleData && (
          <form className="space-y-8">
            <div className="space-y-1">
              <label className="text-gray-500 text-sm" htmlFor="dateSelector">
                Available Date:
              </label>
              <div>
                <select
                  id="dateSelector"
                  {...register("date")}
                  className="p-3 pr-6 border border-gray-100 rounded-md outline-none w-full text-sm"
                >
                  <option value="">Select a date</option>
                  {scheduleData.map((item: AvailableDate) => (
                    <option key={item.date} value={item.date}>
                      {dateFormat(item.date)} {item.day}
                    </option>
                  ))}
                </select>
                {errors?.date && (
                  <p className="text-xs text-red-500">{errors.date.message}</p>
                )}
              </div>
            </div>
            {selectedDate && (
              <div className="space-y-1">
                <label className="text-gray-500 text-sm" htmlFor="timeSelector">
                  Available time on {dateFormat(selectedDate)}
                </label>
                <div>
                  <select
                    id="timeSelector"
                    className="p-3 pr-6 border border-gray-100 rounded-md outline-none w-full text-sm"
                    // onChange={(event) => setSelectedTime(event.target.value)}
                    {...register("time")}
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
                  {errors?.time && (
                    <p className="text-xs text-red-500">
                      {errors.time.message}
                    </p>
                  )}
                </div>
              </div>
            )}
          </form>
        )
      )}
      <div className="flex gap-8">
        <Button
          className="!px-12"
          onClick={handleSubmit(onSubmit)}
          disabled={!scheduleData}
          isLoading={isPending || rescheduling}
        >
          {appoitmentId ? "Reschedule" : "Book"}
        </Button>
        <Button
          disabled={isPending || rescheduling}
          onClick={() => router.back()}
          variant="error"
          className=""
        >
          <Image
            src="/assets/icons/cancel.svg"
            alt="Cancel icon"
            width={20}
            height={20}
          />
          Cancel
        </Button>
      </div>
    </>
  );
};

export default SelectAppointment;
