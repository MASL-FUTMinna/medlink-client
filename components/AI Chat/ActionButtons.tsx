import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const ActionMessages = ({ attachments, sendMessage, isLoading }) => {
	const [selectedChoices, setSelectedChoices] = useState([]);

	const handleButtonClick = (title, value) => {
		sendMessage(title, value);
	};

	const handleChoiceClick = (title, value) => {
		// Check if the choice is already selected
		const isSelected = selectedChoices.some((choice) => choice.value === value);

		if (isSelected) {
			// Deselect the choice
			const updatedChoices = selectedChoices.filter((choice) => choice.value !== value);
			setSelectedChoices(updatedChoices);
		} else {
			// Select the choice
			setSelectedChoices([...selectedChoices, { title, value }]);
		}
	};

	const handleSendMultipleChoice = () => {
		// Send the selected choices
		const values = selectedChoices.map((choice) => choice.value).join(", ");
		const title = selectedChoices.map((choice) => choice.title).join(", ");
		sendMessage(title, values);

		// Reset the selected choices
		setSelectedChoices([]);
	};

	const renderHeroCard = (content) => (
		<div className=" space-y-3">
			{content.buttons.map((button, index) => (
				<button
					className=" block w-full border border-blue-700 py-2 font-medium bg-white text-blue-800 text-sm rounded-md "
					key={index}
					onClick={() => handleButtonClick(button.title, button.value)}
					disabled={isLoading}
				>
					{button.title}
				</button>
			))}
		</div>
	);

	const renderAdaptiveCard = (content) => (
		<div className="space-y-4">
			{content.body.map((container, index) => (
				<div key={index}>
					{container.items.map((input, i) => (
						<div key={i} className=" space-y-2">
							{input.choices.map((choice, j) => (
								<button
									key={j}
									onClick={() => handleChoiceClick(choice.title, choice.value)}
									className={` block w-full border border-blue-700 py-2 font-medium   text-sm rounded-md ${
										selectedChoices.some((selectedChoice) => selectedChoice.value === choice.value)
											? "bg-blue-300 text-blue-900"
											: "bg-white text-blue-800"
									}`}
								>
									{choice.title}
								</button>
							))}
						</div>
					))}
				</div>
			))}

			<button
				onClick={handleSendMultipleChoice}
				disabled={isLoading}
				className="flex justify-center items-center w-full border border-blue-700 py-2 font-medium   text-sm rounded-md bg-blue-800 text-white"
			>
				Continue <FaArrowCircleRight size={28} className=" ml-2" />
			</button>
		</div>
	);

	return (
		<div>
			{attachments.map((attachment, index) => (
				<div key={index}>
					{attachment.contentType === "application/vnd.microsoft.card.hero"
						? renderHeroCard(attachment.content)
						: attachment.contentType === "application/vnd.microsoft.card.adaptive"
						? renderAdaptiveCard(attachment.content)
						: null}
				</div>
			))}
		</div>
	);
};

export default ActionMessages;
