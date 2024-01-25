import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "./baseUrl";

export const useGetHospitals = (searchText: string | null) => {
  return useQuery({
    queryFn: (): Promise<HospitalsResponse> =>
      axios
        .get(`${baseUrl}/hospitals?search=${searchText || ""}`)
        .then((res) => res.data),
    queryKey: ["hospitals", searchText],
  });
};

export const useGetHospitalById = (id: string) => {
  return useQuery({
    queryFn: (): Promise<HospitalDetail> =>
      axios.get(`${baseUrl}/hospitals/${id}`).then((res) => res.data),
    queryKey: ["hospitals-details", id],
  });
};
