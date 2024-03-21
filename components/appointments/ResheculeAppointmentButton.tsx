import React from "react";
import ConfirmAction from "../custom/ConfirmAction";
import useDisclosure from "@/hooks/useDisclosure";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";

interface ResheculeAppointmentButtonProps {
  appointment: UserAppointment;
}

export default function ResheculeAppointmentButton({
  appointment,
}: ResheculeAppointmentButtonProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const onReschedule = () => {
    router.push(
      `/appointments/practitioner/${appointment.practitioner.id}?appointmentId=${appointment.id}`
    );
  };

  const onCancel = () => {
    router.push(`/appointments?appointmentId=${appointment.id}`);
  };

  return (
    <div>
      <Button onClick={onOpen} size={"sm"} className="md:w-[124px] w-full">
        Reschedule
      </Button>
      <ConfirmAction
        isOpen={isOpen}
        onContinue={onReschedule}
        onClose={onClose}
        onCancel={onCancel}
        isLoading={false}
        message="Do you want to reschedule with the same doctor?"
      />
    </div>
  );
}
