import axios from "axios";
import { baseUrl } from "./baseUrl";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useAuthContext } from "@/providers/AuthProvider";

export const useBookAppointment = () => {
  const { toast } = useToast();
  const { user } = useAuthContext();

  return useMutation({
    mutationFn: async (
      values: AppointmentPayload
    ): Promise<AppointmentType> => {
      const res = await axios.post(`${baseUrl}/appointments`, values, {
        headers: { Authorization: `Bearer ${user?.access_token}` },
      });
      return res.data;
    },
    onSuccess: () => {
      toast({
        description: "Booking Successful",
        variant: "success",
        duration: 2000,
      });
    },
  });
};
