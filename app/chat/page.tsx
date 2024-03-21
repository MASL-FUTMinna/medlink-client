"use client";

import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DirectLine } from "botframework-directlinejs";
import { FaArrowCircleRight, FaUserCircle } from "react-icons/fa";
import ActionMessages from "@/components/AI Chat/ActionButtons";
import { BeatLoader } from "react-spinners";
import { Button } from "@/components/ui/Button";
import useDisclosure from "@/hooks/useDisclosure";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CiCircleAlert } from "react-icons/ci";

const directLine = new DirectLine({
  secret: process.env.NEXT_PUBLIC_CHATBOT_API_KEY,
  webSocket: true,
});

console.log(process.env.NEXT_PUBLIC_CHATBOT_API_KEY);

type UserType = {
  name: string;
  id: string;
};

type MessageType = {
  from: UserType;
  type: string;
  text: string;
};

export default function Page() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [messages, setMessages] = useState({});
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesContainerRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!!user) {
      setTimeout(() => {
        onOpen();
      }, 1000);
    }
  }, [user]);

  useEffect(() => {
    directLine.activity$
      .filter(
        (activity) =>
          activity.type === "message" &&
          activity.from.id === "medlink-dev-3aby897"
      )
      .subscribe((message) => {
        setMessages((prev) => ({
          ...prev,
          [message.id as string]: message,
        }));

        setIsLoading(false);
      });
  }, [directLine, user]);

  // Function to send a message through the WebSocket.
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const message = {
      from: user,
      type: "message",
      text: text,
    };

    setIsLoading(true);

    directLine.postActivity(message).subscribe((id) => {
      setMessages((prev) => ({
        ...prev,
        [id as string]: message,
      }));
      setText("");
    });
  };

  const handleSendMessage = (text: string, value: string) => {
    const message = {
      from: user,
      type: "message",
      text: value,
    };

    setIsLoading(true);

    directLine.postActivity(message).subscribe((id) => {
      setMessages((prev) => ({
        ...prev,
        [id as string]: { ...message, text: text },
      }));
      setText("");
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      id: uuidv4(),
      name,
    });
  };

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (!user) {
    return (
      <div className=" h-[80vh] flex justify-center items-center p-4 ">
        <div className=" bg-blue-50 w-full p-4 space-y-4 max-w-3xl mx-auto rounded-xl lg:p-8 lg:space-y-6">
          <h2 className=" text-xl font-semibold text-center">
            Welcome to FindCare AI Chatbot
          </h2>
          <p className=" md:text-lg text-center">
            Your personalized chatbot for all your medical and health related
            questions. <br />
            Please enter your name to continue.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="John Doe..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-4 rounded-lg text-sm w-full border border-gray-400 "
            />

            <Button className="rounded-full justify-center w-full mt-3">
              Continue
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <main className=" p-4    ">
      <section className=" max-w-4xl mx-auto flex flex-col gap-4">
        <div className=" bg-white p-4">
          <p className="text-center font-semibold text-lg rounded-lg">
            <FaUserCircle size={28} className=" inline mr-2" /> Hi,{" "}
            {user?.name || "John Doe"}
          </p>
        </div>
        <div className=" h-[70vh]   flex flex-col justify-end ">
          <div
            className=" overflow-y-auto gap-4 flex flex-col"
            ref={messagesContainerRef}
          >
            {Object.keys(messages)
              .sort((a, b) => {
                // Extracting the numeric part after the "|"
                const numA = parseInt(a.split("|")[1], 10);
                const numB = parseInt(b.split("|")[1], 10);

                // Comparing the numeric parts
                return numA - numB;
              })
              .map((id, index) => {
                const message = messages[id];
                return (
                  <>
                    {message.from.id === user.id ? (
                      <div
                        className=" flex justify-end items-center w-full  "
                        key={index}
                      >
                        <div className=" bg-primary text-white p-3 rounded-md max-w-[80%]">
                          <h4>{message.from.name}</h4>
                          <p className="text-white">{message.text}</p>
                        </div>
                      </div>
                    ) : (
                      <div className=" " key={index}>
                        <div className=" bg-blue-100 p-3 rounded-md max-w-[80%] space-y-2">
                          <h4>FindCare AI</h4>
                          <p
                            className=""
                            dangerouslySetInnerHTML={{
                              __html: message?.text
                                .replace(/\n/g, "<br>")
                                .replace(/<break\/>/g, "<br>"),
                            }}
                          ></p>

                          {message.attachments && (
                            <ActionMessages
                              attachments={message.attachments}
                              sendMessage={handleSendMessage}
                              isLoading={isLoading}
                            />
                          )}
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
          </div>

          {/* loading spinner */}
          <div className=" flex justify-center  items-center p-6">
            <BeatLoader color="#3B82F6" loading={isLoading} size={15} />
          </div>
        </div>
        <form
          className="  bg-gray-100 p-2 flex items-center space-x-4  rounded-lg"
          onSubmit={sendMessage}
        >
          <input
            type="search"
            required
            placeholder="Enter your message..."
            className="p-3 rounded text-sm w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>
            <FaArrowCircleRight size={28} />
          </button>
        </form>
      </section>

      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="min-w-[600px] space-y-4 flex justify-center flex-col items-center h-[350px] ">
          <CiCircleAlert className="text-[60px] text-red-500" />
          <p className="text-center w-8/12 font-medium text-xl text-gray-500 ">
            Disclaimer: The diagnosis generated from this section is suggestive
            not definitive
          </p>

          <Button onClick={onClose} className="w-[220px]">
            Okay, Continue
          </Button>
        </DialogContent>
      </Dialog>
    </main>
  );
}
