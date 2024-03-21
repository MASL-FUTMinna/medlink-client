import { HospitalBanner } from "@/components/hospitals";
import HospitalsList from "@/components/hospitals/HospitalsList";

export default function Page() {
  return (
    <div>
      <HospitalBanner />
      <HospitalsList />
    </div>
  );
}
