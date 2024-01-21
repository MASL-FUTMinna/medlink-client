'use client'
import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AppointmentButtons = () => {
    const router = useRouter();
  return (
    <div className="flex gap-8">
      <Button className="!px-12">Next</Button>
      <Button
        handleClick={() => router.back()}
        leftIcon={
          <Image
            src="/assets/icons/cancel.svg"
            alt="Cancel icon"
            width={20}
            height={20}
          />
        }
        className="bg-transparent !text-[#F44336] underline underline-offset-2"
      >
        Cancel
      </Button>
    </div>
  );
};

export default AppointmentButtons;
