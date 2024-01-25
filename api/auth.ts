import { LoginSchemaType, SignupSchemaType } from "@/schemas/authSchema";
import axios from "axios";
import { baseUrl } from "./baseUrl";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import config from "@/utils/config";
// import { useAuthContext } from "@/providers/AuthProvider";

export const useLogin = () => {
  const { toast } = useToast();
  // const { login } = useAuthContext();
  const router = useRouter();

  return useMutation({
    mutationFn: async (values: LoginSchemaType) => {
      const res = await axios.post(`${baseUrl}/auth/login`, values);
      return res.data;
    },
    onSuccess: (res) => {
      // login(res);
      toast({
        description: "Signin Successful",
        variant: "success",
        duration: 2000,
      });
      const redirect = localStorage.getItem(config.key.redirect);
      if (redirect) {
        router.push(redirect);
        localStorage.removeItem(config.key.redirect);
      } else {
        router.push("/appointments/history");
      }
    },
  });
};

export const useSignup = () => {
  const router = useRouter();
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (values: SignupSchemaType) => {
      const res = await axios.post(`${baseUrl}/users`, values);
      return res.data;
    },
    onSuccess: (res) => {
      toast({
        description: "Signup Successful",
        variant: "success",
        duration: 2000,
      });
      router.push("/auth/sign-in");
    },
  });
};
