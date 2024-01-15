import Accordion from "./Accordion";
import Button from "./ui/Button";

const FAQ = () => {
  const FAQ_LIST = [
    {
      question: "What is this question for?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione! Minus sit illo laboriosam sint tempore quasi vel corrupti? Doloribus dolorem ut debitis ipsa a. Neque accusamus molestias accusantium tempore.",
    },
    {
      question: "What is this question for?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione! Minus sit illo laboriosam sint tempore quasi vel corrupti? Doloribus dolorem ut debitis ipsa a. Neque accusamus molestias accusantium tempore.",
    },
    {
      question: "What is this question for?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione! Minus sit illo laboriosam sint tempore quasi vel corrupti? Doloribus dolorem ut debitis ipsa a. Neque accusamus molestias accusantium tempore.",
    },
    {
      question: "What is this question for?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ratione! Minus sit illo laboriosam sint tempore quasi vel corrupti? Doloribus dolorem ut debitis ipsa a. Neque accusamus molestias accusantium tempore.",
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
