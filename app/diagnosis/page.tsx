"use client";
import React from "react";
import diagnosisBg from "@/public/assets/images/diagonsis.png";
import diagnosisImg1 from "@/public/assets/images/diagnosis-1.png";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import MaxWidth from "@/components/MaxWidth";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <header
        className=" bg-center bg-cover bg-no-repeat px-2 py-14 md:py-24"
        style={{ backgroundImage: `url(${diagnosisBg.src})` }}
      >
        <MaxWidth>
          <div className=" bg-[#EDEBFFD1] rounded-r-3xl lg:rounded-r-[6rem] p-4 space-y-6 md:px-6 lg:px-12 md:py-16 lg:w-1/2 lg:space-y-10">
            <p>Home {">"} Get Diagnosis </p>
            <h3 className=" text-2xl md:text-3xl lg:text-4xl font-bold">
              Empower Your Health Journey with our AI-Powered Diagnosis
            </h3>
            <p className=" text-gray-800 leading-6 md:text-lg lg:text-xl lg:leading-8">
              Take control of your well-being with our revolutionary AI
              diagnosis system. Guided by interactive clinical-history taking,
              our AI engages you in a personalized, insightful conversation to
              uncover potential health concerns.
            </p>

            <div>
              <Link href="/chat">
                <Button>Get Diagnosis</Button>
              </Link>
            </div>
          </div>
        </MaxWidth>
      </header>

      <MaxWidth>
        <section className=" py-12 md:py-16 lg:py-32 px-4">
          <div className=" grid gap-6 lg:grid-cols-2">
            <Image
              src={diagnosisImg1}
              alt="diagnosis"
              className=" object-cover mx-auto"
            />

            <div className=" space-y-2 lg:space-y-6">
              <h3 className=" text-2xl lg:text-3xl font-semibold">
                Welcome to FindCare AI Diagnosis
              </h3>

              <p className="leading-6 text-gray-500  lg:text-lg lg:leading-8">
                {` Prepare for an interactive journey as we delve into your health
                history through a personalized clinical-history taking process.
                Your health story matters, and we're here to uncover the
                insights that matter most to you`}
              </p>

              {/* <MedicalQuestions /> */}
              <div>
                <Link href="/chat">
                  <Button>Start Diagnosis</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </MaxWidth>
    </main>
  );
}
