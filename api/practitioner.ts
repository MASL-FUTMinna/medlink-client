import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { AvailableDate } from "@/types/date";
import { useAuthContext } from "@/providers/AuthProvider";

export const useGetPractionerById = (id: string) => {
  return useQuery({
    queryFn: (): Promise<PractitionerType> =>
      axios.get(`${baseUrl}/practitioners/${id}`).then((res) => res.data),
    queryKey: ["practitioner-details", id],
  });
};

export const useGetPractionerAvailability = (id: string) => {
  return useQuery({
    queryFn: (): Promise<AvailableDate[]> =>
      axios
        .get(`${baseUrl}/schedules/${id}/?timeZone=Africa/Lagos`)
        .then((res) => res.data),
    queryKey: ["practitioner-availability", id],
  });
};

export const useGetPractitionerAppointments = () => {
  const { user } = useAuthContext();
  return useQuery({
    queryFn: (): Promise<PractitionerAppointmentResponse> =>
      axios
        .get(`${baseUrl}/appointments/practitioners/${user?.id}`)
        .then((res) => res.data),
    queryKey: ["user-appointments", user?.id],
    retry: false,
  });
};

