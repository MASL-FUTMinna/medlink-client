import { IoMdCloseCircleOutline } from "react-icons/io";
import ConfirmAction from "../custom/ConfirmAction";
import { Button } from "../ui/Button";
import { dateFormat, timeFormat } from "@/utils/helpers";
import Image from "next/image";
import useDisclosure from "@/hooks/useDisclosure";
import { useCancelAppointment } from "@/api/appointments";
import config from "@/utils/config";
import { usePathname, useRouter } from "next/navigation";
import { useAuthContext } from "@/providers/AuthProvider";
import { useToast } from "../ui/use-toast";

interface AppointmentItemProps {
    appointment: PractitionerAppointments;
}

const AppointmentList = ({ appointment }: AppointmentItemProps) => {
    const router = useRouter();
    const { isLoggedIn, user } = useAuthContext();
    const { toast } = useToast();
    const pathname = usePathname();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const {
        isPending,
        mutate: Cancel,
        data: CancelledData 
    } = useCancelAppointment();

    console.log(CancelledData)
    const onCancel = (id: number ) => {
        if (!isLoggedIn || !user?.id) {
            toast({ description: "Please sign in to continue", variant: "error" });
            localStorage.setItem(config.key.redirect, pathname);
            router.push("/auth/sign-in");
            return;
        }
        const payload: PractitionerAppointmentPayload = {
            status: "cancelled"
        };
        Cancel({
            payload,
            appointmentId: id.toString(),
        });
        onClose();
    };

return (
    <div
        className="flex items-center flex-col sm:flex-row gap-8 border-b border-gray-200 pb-5"
    >
        <div className="flex flex-col gap-4">
            <h4 className="text-black text-[17px] font-normal">
                Appointment with
                <span className="text-indigo-800 text-[17px] font-bold">
                    {" "}
                    {appointment.user.last_name} {appointment.user.first_name}
                </span>
            </h4>
            <div className="flex gap-2 items-center">
                <Image
                    src="/assets/icons/hospital.svg"
                    alt="Hospital building icon"
                    width={20}
                    height={20}
                />
                <p className="text-center text-neutral-500 text-sm font-normal">
                    {appointment.user.email}{" "}
                </p>
            </div>
            <div className="flex items-center gap-3">
                <div className="text-center text-neutral-500 text-sm font-medium flex justify-center items-center gap-2">
                    <Image
                        src="/assets/icons/symbols_calendar.svg"
                        alt="calendar"
                        width={15}
                        height={15}
                    />
                    {dateFormat(appointment.date)}
                </div>
                <div className="text-center text-neutral-500 text-sm font-medium flex justify-center items-center gap-2">
                    <Image
                        src="/assets/icons/access-time.svg"
                        alt="time"
                        width={15}
                        height={15}
                    />
                    {timeFormat(appointment.time)}
                </div>
            </div>
            <p
                className={`w-[88px] block h-[21px] text-center ${appointment.status === "pending"
                    ? "bg-yellow-50 text-yellow-600"
                    : "text-green-500 bg-emerald-50"
                    }  text-xs font-medium px-3 py-0.5 rounded-xl`}
            >
                {appointment.status}
            </p>

            <div className="flex gap-2 items-center">
                {appointment.status === "pending" && (
                    <Button
                        variant="error"
                        size="sm"
                        className="text-red-500 text-sm w-full md:w-fit "
                        onClick={onOpen}
                    >
                        <IoMdCloseCircleOutline className="text-base -mr-1" />
                        Cancel
                    </Button>
                )}
                <ConfirmAction
                    isOpen={isOpen}
                    onContinue={() => onCancel(appointment.id)}
                    onClose={onClose}
                    onCancel={onClose}
                    isLoading={isPending}
                    message={`Are you sure you want to cancel your appointment with ${appointment.user.last_name} ${appointment.user.first_name}?`}
                />
            </div>
        </div>
    </div>
)
}

export default AppointmentList