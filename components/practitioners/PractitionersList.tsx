import { useSearchParams } from "next/navigation";
import { Skeleton } from "../ui/skeleton";
import Practioner from "./Practitioner";

interface PractitionersListProps {
  hospital: HospitalDetail | undefined;
  isLoading: boolean;
}

const PractitionersList = ({ hospital, isLoading }: PractitionersListProps) => {
  const searchParams = useSearchParams();

  const appoitmentId = searchParams.get("appointmentId");
  return (
    <ul className="py-8 grid grid-cols-hospitals gap-8">
      {isLoading ? (
        Array.from({ length: 12 }).map((_, i) => (
          <Skeleton className="h-[200px] bg-slate-200" key={i} />
        ))
      ) : hospital && hospital.practitioners.length > 0 ? (
        hospital.practitioners.map((practitioner: HospitalPractioner) => (
          <Practioner
            key={practitioner.id}
            practitioner={{ ...practitioner, hospital_name: hospital.name }}
            appointmentId={appoitmentId}
          />
        ))
      ) : (
        <p className="section">No Practitioners Found</p>
      )}
    </ul>
  );
};

export default PractitionersList;
