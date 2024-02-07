import axios from "axios";
import { baseUrl } from "./baseUrl";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useAuthContext } from "@/providers/AuthProvider";

export const useBookAppointment = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (
      values: AppointmentPayload
    ): Promise<AppointmentType> => {
      const res = await axios.post(`${baseUrl}/appointments`, values);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["practitioner-availability"],
      });
      toast({
        description: "Booking Successful",
        variant: "success",
        duration: 2000,
      });
    },
  });
};

export const useGetAppointmentHistory = () => {
  const { user } = useAuthContext();
  return useQuery({
    queryFn: (): Promise<UserAppointmentResponse> =>
      axios
        .get(`${baseUrl}/appointments/users/${user?.id}`)
        .then((res) => res.data),
    queryKey: ["user-appointments", user?.id],
    retry: false,
  });
};

export const useRescheduleAppointment = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (values: {
      payload: AppointmentPayload;
      appointmentId: string;
    }): Promise<AppointmentType> => {
      const res = await axios.patch(
        `${baseUrl}/appointments/${values.appointmentId}/users`,
        values.payload
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["practitioner-availability"],
      });
      toast({
        description: "Rescheduling Successful",
        variant: "success",
        duration: 2000,
      });
    },
  });
};
