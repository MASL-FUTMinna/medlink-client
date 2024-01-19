import { HospitalProps } from "@/types/hospital";
import Hospital from "./Hospital";

async function getData() {
  const res = await fetch("https://medlink-server-production.up.railway.app/hospitals");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  
  return res.json();
}

const HospitalsList = async() => {
  const data = await getData()
  return (
    <ul className="py-8 grid grid-cols-hospitals gap-8">
      {data.map((hospital: HospitalProps) => (
        <Hospital key={hospital.id} {...hospital} />
      ))}
    </ul>
  );
};

export default HospitalsList;
