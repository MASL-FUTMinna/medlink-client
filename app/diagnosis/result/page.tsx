"use client";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function Page() {
	const [showModal, setShowModal] = React.useState(true);
	return (
		<main className=" px-2 py-6">
			{/* congrats modal */}

			{showModal && (
				<div
					onClick={() => setShowModal(false)}
					className=" fixed z-50 left-0 top-0 w-full h-full bg-black/70 flex justify-center items-center p-2"
				>
					<div
						className="bg-white w-full p-6 rounded-lg space-y-4 lg:space-y-6 max-w-2xl lg:p-10"
						onClick={(evt) => evt.stopPropagation()}
					>
						<FaCircleCheck size={84} color="green" className=" block mx-auto" />
						<h4 className=" text-center text-xl md:text-2xl lg:text-3xl font-semibold">Congrats</h4>
						<p className=" text-center leading-6 md:text-lg lg:text-xl">
							Your diagnosis has been sent to the doctor and to your mail. You will be notified when the doctor
							responds. Thank you for using our service.
						</p>
					</div>
				</div>
			)}
			<section className=" border border-gray-300 rounded-lg p-4 space-y-6 lg:space-y-10 max-w-4xl mx-auto md:p-8 lg:p-10">
				<h3 className=" text-lg md:text-xl lg:text-3xl">Your Diagnosis Report</h3>

				<div className=" grid gap-4 lg:grid-cols-2 lg:gap-8">
					<div>
						<h3 className=" font-medium mb-1 md:text-lg">Name:</h3>
						<p className=" lg:text-lg">John Doe</p>
					</div>
					<div>
						<h3 className=" font-medium mb-1 md:text-lg">Age:</h3>
						<p className=" lg:text-lg">24 yrs</p>
					</div>
					<div>
						<h3 className=" font-medium mb-1 md:text-lg">Gender:</h3>
						<p className=" lg:text-lg">Male</p>
					</div>
					<div>
						<h3 className=" font-medium mb-1 md:text-lg">Symptoms:</h3>
						<p className=" lg:text-lg">Laziness, Catarrh, nose bleeding</p>
					</div>
				</div>

				<div>
					<h3 className=" font-medium mb-1 md:text-lg lg:text-xl">Your Diagnosis:</h3>

					<div className=" space-y-3 lg:text-lg lg:leading-8">
						<p className="lg:text-lg lg:leading-7">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, iste cupiditate, earum repellendus dolorem
							incidunt, recusandae laudantium saepe hic asperiores dolores cumque qui cum. Accusamus necessitatibus
							delectus id recusandae ratione!
						</p>

						<p className="lg:text-lg lg:leading-7">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex repellendus numquam dolorem sapiente
							quidem corporis, voluptatibus soluta labore dolorum quisquam voluptas doloremque rerum fugit architecto.
							Beatae corporis fugit mollitia?
						</p>
						<p className="lg:text-lg lg:leading-7">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex repellendus numquam dolorem sapiente
							quidem corporis, voluptatibus soluta labore dolorum quisquam voluptas doloremque rerum fugit architecto.
							Beatae corporis fugit mollitia?
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
