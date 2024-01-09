import Practioner from "./Practioner";

const PractionersList = () => {
  const PRACTIONERS = [
    {
      id: "1",
      name: "Pamela Ojir",
      hospital: "Standard Hospital",
      profession: "Optician",
      img: "/assets/images/practioner-2.png",
    },
    {
      id: "2",
      name: "Ronald Eze",
      hospital: "Top Medical Hospital",
      profession: "Optician",
      img: "/assets/images/practioner-1.png",
    },
    {
      id: "3",
      name: "Marcus",
      hospital: "Optimal Family Medical Centre",
      profession: "Optician",
      img: "/assets/images/practioner-3.png",
    },
    {
      id: "4",
      name: "Angela Sandra",
      hospital: "Shiloh Hospital and Diagnostic Center",
      profession: "Optician",
      img: "/assets/images/practioner-4.png",
    },
    {
      id: "5",
      name: "Pamela Ojir",
      hospital: "Standard Hospital",
      profession: "Optician",
      img: "/assets/images/practioner-2.png",
    },
    {
      id: "6",
      name: "Bella Ijeoma",
      hospital: "Standard Hospital",
      profession: "Optician",
      img: "/assets/images/practioner-4.png",
    },
    {
      id: "7",
      name: "Stephen",
      hospital: "Standard Hospital",
      profession: "Optician",
      img: "/assets/images/practioner-3.png",
    },
  ];
  return (
    <ul className="py-8 grid grid-cols-practioners gap-8">
      {PRACTIONERS.map((practioner) => (
        <Practioner key={practioner.id} {...practioner} />
      ))}
    </ul>
  );
};

export default PractionersList;
