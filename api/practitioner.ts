import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { AvailableDate } from "@/types/date";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { PractitionerSignupSchemaType } from "@/schemas/practitionerSchema";
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

export const usePractitionerSignUp = () => {
  const router = useRouter();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (values: PractitionerSignupSchemaType) => {
      const formdata = new FormData();

      formdata.append("firstName", values.firstName);
      formdata.append("lastName", values.lastName);
      formdata.append("email", values.email);
      formdata.append("password", values.password);
      formdata.append("bio", values.bio);
      formdata.append("specialization", values.specialization);
      formdata.append("hospitalId", String(values.hospitalId));
      //   @ts-ignore
      formdata.append("photo", values.photo);

      const res = await axios.post(`${baseUrl}/practitioners`, formdata, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      return res.data;
    },
    onSuccess: () => {
      toast({
        description: "Signup Successful",
        variant: "success",
        duration: 2000,
      });
      router.push("/practitioner/sign-in");
    },
  });
};

export const useGetPractitionerAppointments = () => {
  const { user } = useAuthContext();
  return useQuery({
    queryFn: (): Promise<PractitionerAppointmentResponse> =>
      axios
        .get(`${baseUrl}/appointments/practitioners/${user?.id}`)
        .then((res) => res.data),
    queryKey: ["practitioner-appointments", user?.id],
    retry: false,
  });
};
