import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Dialog, DialogContent } from "../ui/dialog";
import { timezoneFromat } from "@/utils/helpers";

interface BookingSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  scheduleResponse: AppointmentType;
}

export default function BookingSuccess({
  isOpen,
  onClose,
  scheduleResponse,
}: BookingSuccessProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="bg-white w-11/12 md:w-[450px] p-8 px-6 md:px-12 rounded-md flex justify-center items-center flex-col">
        <div className="bg-indigo-500 p-3 rounded-full mb-3">
          <Image
            src="/assets/icons/charm_tick.svg"
            alt="tick"
            width={40}
            height={40}
          />
        </div>
        <p className="text-center text-black text-xl md:text-[32px] font-bold mb-3">
          Booking Confirmed!
        </p>
        <p className="mb-2 text-center text-neutral-600 text-[14px] font-normal tracking-tight">
          The booking confirmation has been sent to your Email Address
        </p>
        <hr className="bg-gray-200 w-full h-0.5" />
        <div className="mt-2 items-center gap-4 flex justify-center flex-col">
          <p className="text-center text-indigo-500 text-base font-semibold">
            Booking ID - {scheduleResponse.id}
          </p>
          <Image
            src={scheduleResponse.practitioner.photoUrl}
            alt={scheduleResponse.practitioner.first_name}
            width={80}
            height={80}
            className="rounded-md w-20 h-20 object-cover"
          />
          <p className="text-xl font-bold">
            Dr. {scheduleResponse.practitioner.first_name}{" "}
            {scheduleResponse.practitioner.last_name}
          </p>

          <div className="items-center gap-2 flex justify-center">
            <div className="text-center text-neutral-500 text-sm font-medium flex justify-center items-center gap-2">
              <Image
                src="/assets/icons/symbols_calendar.svg"
                alt="calendar"
                width={15}
                height={15}
              />
              {
                timezoneFromat(scheduleResponse.date, scheduleResponse.time)
                  .clockDate
              }
            </div>
            <div className="rotate-90 border border-neutral-400 w-6"></div>
            <div className="text-center text-neutral-500 text-sm font-medium flex justify-center items-center gap-1">
              <Image
                src="/assets/icons/access-time.svg"
                alt="time"
                width={15}
                height={15}
              />
              {
                timezoneFromat(scheduleResponse.date, scheduleResponse.time)
                  .clockTime
              }
            </div>
          </div>
        </div>

        <Button
          onClick={onClose}
          className="mt-4 p-2.5 bg-indigo-500 rounded text-white text-xl font-bold w-full text-center flex justify-center items-center"
        >
          Done
        </Button>
      </DialogContent>
    </Dialog>
  );
}
