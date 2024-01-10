import { PRACTIONERS } from "@/constants/practioner";
import Practioner from "./Practioner";

const PractionersList = () => {
  return (
    <ul className="py-8 grid grid-cols-practioners gap-8">
      {PRACTIONERS.map((practioner) => (
        <Practioner key={practioner.id} {...practioner} />
      ))}
    </ul>
  );
};

export default PractionersList;
