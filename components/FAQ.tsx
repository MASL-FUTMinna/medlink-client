import Accordion from "./Accordion";
import Button from "./ui/Button";

const FAQ = () => {
  const FAQ_LIST = [
    {
      question: "What is Medlink about?",
      answer: "Medlink is a platform that focuses on facilitating remote healthcare services, appointment scheduling, and preliminary health assessments. It does not replace the need for in-person medical examinations in emergency situations.",
    },
    {
      question: "What unique services does Medlink offer?",
      services: [
        { description: "Remote Appointment Booking: We made a system that allows users to schedule appointments with doctors from the comfort of their homes, eliminating the need for physical visits." },
        { description: "Symptom-Based Doctor Recommendation: We Implemented an intelligent algorithm (utilizing AI) that analyzes user-provided symptoms and family health history to suggest a list of doctors with relevant specializations." },
        { description: "AI-Powered Diagnosis: We Integrated of artificial intelligence to perform preliminary health assessments based on user-inputted information, providing users with potential diagnoses for their health challenges." },
      ],
    },
    {
      question: "What is AI Diagnosis?",
      answer: "AI-Powered Diagnosis: Are you confused by the symptoms you feel? Our AI Diagnosis is the Integration of artificial intelligence to perform preliminary health assessments based on user-inputted information, providing users with potential diagnoses for their health challenges.",
    },
    {
      question: "How do I book an appointment?",
      services: [
        {
          description: "Start by clicking the 'book an appointment' button",
        },
        {
          description: "Search for a nearby hospital or choose one from our recommendations",
        },
        {
          description: "Choose a practitioner of choice based on their field of specialization",
        },
        {
          description: "You have your booking card ready",
        },
      ],
    },
  ];

  return (
    <section className="section py-16 flex flex-col gap-8 md:flex-row scroll-mt-10" id="faq">
      <section className="flex flex-col gap-4 items-start">
        <h3 className="font-semibold text-3xl">Frequently Asked Questions</h3>
        <p className="mb-4">
          We are answering most frequent questions. No worries if you not find
          exact one. You can find out more by searching or continuing clicking
          button below or directly contact our support.
        </p>

        <Button>Read all FAQ</Button>
      </section>
      <section className="flex flex-col gap-6">
        {FAQ_LIST.map((faq, index) => (
          <Accordion key={index} {...faq} />
        ))}
      </section>
    </section>
  );
};

export default FAQ;
