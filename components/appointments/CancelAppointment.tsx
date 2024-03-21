import { IoMdCloseCircleOutline } from "react-icons/io";
import ConfirmAction from "../custom/ConfirmAction";
import { Button } from "../ui/Button";
import useDisclosure from "@/hooks/useDisclosure";
import { useCancelAppointment } from "@/api/appointments";
import config from "@/utils/config";
import { usePathname, useRouter } from "next/navigation";
import { useAuthContext } from "@/providers/AuthProvider";
import { useToast } from "../ui/use-toast";
import { useEffect } from "react";

interface AppointmentItemProps {
  appointment: UserAppointment;
}

const CancelAppointment = ({ appointment }: AppointmentItemProps) => {
  const router = useRouter();
  const { isLoggedIn, user } = useAuthContext();
  const { toast } = useToast();
  const pathname = usePathname();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isPending, mutate: Cancel, isSuccess } = useCancelAppointment();

  useEffect(() => {
    isSuccess && onClose();
  }, [isSuccess]);

  const onCancel = (id: number) => {
    if (!isLoggedIn || !user?.id) {
      toast({ description: "Please sign in to continue", variant: "error" });
      localStorage.setItem(config.key.redirect, pathname);
      router.push("/auth/sign-in");
      return;
    }
    const payload: PractitionerAppointmentPayload = {
      status: "cancelled",
    };
    Cancel({
      payload,
      appointmentId: id.toString(),
    });
  };

  return (
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
        message={`Are you sure you want to cancel your appointment with ${appointment.practitioner.first_name} ${appointment.practitioner.last_name}?`}
      />
    </div>
  );
};

export default CancelAppointment;
