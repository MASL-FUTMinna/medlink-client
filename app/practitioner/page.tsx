import PractitionerAppointment from "@/components/practitioners/PractitionerAppointment";
import { cookies } from "next/headers";

export default function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return <PractitionerAppointment token={token} />;
}
