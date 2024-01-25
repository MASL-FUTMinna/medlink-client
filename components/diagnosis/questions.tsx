"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";

const MedicalQuestions = () => {
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState({});

  const router = useRouter();

  const questions = [
    { id: 1, text: "Your name?", type: "text" },
    { id: 2, text: "How old are you?", type: "text" },
    {
      id: 3,
      text: "Do you have any pre-existing medical conditions?",
      type: "select",
      options: ["Yes", "No"],
    },
    {
      id: 4,
      text: "Select your blood type:",
      type: "multipleSelect",
      options: ["A", "B", "AB", "O"],
    },
    {
      id: 5,
      text: "Are you currently taking any medications?",
      type: "select",
      options: ["Yes", "No"],
    },
    { id: 6, text: "Describe any allergies you have:", type: "text" },
  ];

  const handleInputChange = (id: number, value: any) => {
    setResponses({ ...responses, [id]: value });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    router.push("/diagnosis/result");
  };

  const renderQuestion = () => {
    const currentQuestion = questions.find((q) => q.id === step);

    if (!currentQuestion) {
      return null;
    }

    switch (currentQuestion.type) {
      case "text":
        return (
          <div>
            <label className=" lg:text-lg">{currentQuestion.text}</label>
            <input
              type="text"
              value={responses[currentQuestion.id] || ""}
              onChange={(e) =>
                handleInputChange(currentQuestion.id, e.target.value)
              }
              className="p-2 bg-white rounded-md border border-gray-300 w-full mt-2"
            />
          </div>
        );

      case "select":
        return (
          <div>
            <label className=" lg:text-lg">{currentQuestion.text}</label>
            <select
              value={responses[currentQuestion.id] || ""}
              onChange={(e) =>
                handleInputChange(currentQuestion.id, e.target.value)
              }
              className="p-2 bg-white rounded-md border border-gray-300 w-full mt-2"
            >
              <option value="">Select an option</option>
              {currentQuestion?.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      case "multipleSelect":
        return (
          <div>
            <label className=" lg:text-lg">{currentQuestion.text}</label> <br />
            <select
              multiple
              value={responses[currentQuestion.id] || []}
              onChange={(e) =>
                handleInputChange(
                  currentQuestion.id,
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className="w-full mt-2"
            >
              {currentQuestion?.options.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="p-2 bg-white rounded-md border border-gray-300 w-full mt-2"
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className=" py-8">
      <h2 className=" mb-4 md:text-lg lg:text-2xl">
        Medical Condition/Health Form
      </h2>
      {renderQuestion()}
      <div className=" mt-3 lg:mt-6 flex justify-between items-center">
        {step > 1 && (
          <button
            onClick={handlePrev}
            className=" p-3 border border-gray-300 rounded-lg"
          >
            Previous
          </button>
        )}
        {step < questions.length && (
          <Button handleClick={handleNext}>Next</Button>
        )}
        {step === questions.length && (
          <Button handleClick={handleSubmit}>Submit</Button>
        )}
      </div>
    </div>
  );
};

export default MedicalQuestions;
