import { useToast } from "@/components/ui/use-toast";
import config from "@/utils/config";
import axios from "axios";
import { useEffect, useRef } from "react";

const useAxiosInterceptor = () => {
  const { toast } = useToast();
  const isToastShownRef = useRef(false);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      function (axiosConfig) {
        const token = localStorage.getItem(config.key.token);
        axiosConfig.headers.Authorization = `Bearer ${token}`;
        return axiosConfig;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response) {
          if (error?.response?.status >= 500) {
            toast({
              description: "Sorry, an we couldn't handle your request",
              variant: "error",
              duration: 2000,
            });
          } else {
            const message =
              error.response?.data?.data?.error?.message ||
              error?.response?.data?.data?.message ||
              error?.response?.data?.message ||
              error.message;
            toast({
              description: message || "An error coccurred",
              variant: "error",
              duration: 2000,
            });
          }
        } else if (error.request) {
          // LOGIC TO SHOW ERROR MESSAGE
        } else {
          // flash error message
        }

        // Flag to prevent showing the error message again
        isToastShownRef.current = true;

        return Promise.reject(error);
      }
    );

    return () => {
      // Remove the interceptor when the component unmounts
      axios.interceptors.response.eject(responseInterceptor);
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, []);
};

export default useAxiosInterceptor;
