"use client";

import PractitionerAppointment from "@/components/practitioners/PractitionerAppointment";
import { useAuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

export default function Page() {
  const { isLoggedIn } = useAuthContext();

  const { push } = useRouter();

  if (!isLoggedIn) {
    push("/auth/practitioner/sign-in");
    return null;
  }
  return <PractitionerAppointment />;
}
