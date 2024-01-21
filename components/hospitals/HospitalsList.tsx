import { HospitalProps, HospitalsProps } from "@/types/hospital";
import Hospital from "./Hospital";

const HospitalsList = async({data} : {data: HospitalsProps}) => {
  if (!data || data.data.length === 0) {
    return <p className="section">No Hospitals Found</p>;
  }
  return (
    <ul className="py-8 grid grid-cols-hospitals gap-8">
      {data.data.map((hospital: HospitalProps) => (
        <Hospital key={hospital.id} {...hospital} />
      ))}
    </ul>
  );
};

export default HospitalsList;
