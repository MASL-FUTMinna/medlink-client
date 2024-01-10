import { PRACTITIONERS } from "@/constants/practitioner";
import Practioner from "./Practitioner";

const PractitionersList = () => {
  return (
    <ul className="py-8 grid grid-cols-practitioners gap-8">
      {PRACTITIONERS.map((practitioner) => (
        <Practioner key={practitioner.id} {...practitioner} />
      ))}
    </ul>
  );
};

export default PractitionersList;
