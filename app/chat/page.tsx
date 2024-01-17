"use client";

import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DirectLine } from "botframework-directlinejs";
import Button from "@/components/ui/Button";
import { FaArrowCircleRight, FaUserCircle } from "react-icons/fa";

const directLine = new DirectLine({
	secret: process.env.NEXT_PUBLIC_CHATBOT_API_KEY,
	webSocket: true,
});

export default function Page() {
	const [text, setText] = useState("");
	const [name, setName] = useState("");
	const [messages, setMessages] = useState({});
	const [user, setUser] = useState(null);

	useEffect(() => {
		directLine.activity$
			.filter((activity) => activity.type === "message" && activity.from.id === "medlink-dev-3aby897")
			.subscribe((message) => {
				setMessages((prev) => ({
					...prev,
					[message.id as string]: message,
				}));
			});
	}, []);

	// Function to send a message through the WebSocket.
	const sendMessage = (e) => {
		e.preventDefault();

		const message = {
			from: user,
			type: "message",
			text: text,
		};

		directLine.postActivity(message).subscribe((id) => {
			setMessages((prev) => ({
				...prev,
				[id as string]: message,
			}));
			setText("");
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({
			id: uuidv4(),
			name,
		});
	};

	if (!user) {
		return (
			<div className=" h-[80vh] flex justify-center items-center p-4 bg-blue-50">
				<div className=" bg-white w-full p-4 space-y-4 max-w-3xl mx-auto rounded-xl lg:p-8 lg:space-y-6">
					<h2 className=" text-xl font-semibold text-center">Welcome to Medlink AI Chatbot</h2>
					<p className=" md:text-lg text-center">
						Your personalized chatbot for all your medical and health related questions. <br />
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

						<Button className="rounded-full justify-center w-full mt-3">Continue</Button>
					</form>
				</div>
			</div>
		);
	}

	return (
		<main className=" p-4  bg-blue-100  ">
			<section className=" max-w-4xl mx-auto flex flex-col gap-4">
				<div className=" bg-white p-4">
					<p className="text-center font-semibold text-lg rounded-lg">
						<FaUserCircle size={28} className=" inline mr-2" /> Hi, {user?.name || "John Doe"}
					</p>
				</div>
				<div className=" h-[70vh]   flex flex-col justify-end ">
					<div className=" overflow-y-auto gap-4 flex flex-col">
						{Object.keys(messages)
							.sort((a, b) => {
								// Extracting the numeric part after the "|"
								const numA = parseInt(a.split("|")[1], 10);
								const numB = parseInt(b.split("|")[1], 10);

								// Comparing the numeric parts
								return numA - numB;
							})
							.map((id) => {
								const message = messages[id];
								return (
									<>
										{message.from.id === user.id ? (
											<div className=" flex justify-end items-center w-full  ">
												<div className=" bg-primary text-white p-3 rounded-md max-w-[80%]">
													<h4>{message.from.name}</h4>
													<p className="text-white">{message.text}</p>
												</div>
											</div>
										) : (
											<div className=" ">
												<div className=" bg-white  p-3 rounded-md max-w-[80%]">
													<h4>Medlink AI</h4>
													<p
														className=""
														dangerouslySetInnerHTML={{
															__html: message.speak.replace(/\n/g, "<br>").replace(/<break\/>/g, "<br>"),
														}}
													></p>
												</div>
											</div>
										)}
									</>
								);
							})}
					</div>
				</div>
				<form className="  bg-white p-2 flex items-center space-x-4  rounded-lg" onSubmit={sendMessage}>
					<input
						type="search"
						required
						placeholder="Enter your message..."
						className="p-3 rounded text-sm w-full"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
					<button>
						<FaArrowCircleRight size={28} />
					</button>
				</form>
			</section>
		</main>
	);
}
