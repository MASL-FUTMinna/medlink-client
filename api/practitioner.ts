import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { AvailableDate } from "@/types/date";

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
