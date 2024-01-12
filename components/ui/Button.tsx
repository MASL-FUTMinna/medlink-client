type Prop = {
	children: React.ReactNode;
	className?: string;
	leftIcon?: React.ReactNode;
	handleClick?: () => void;
	type?: "button" | "submit";
};

const Button = ({ children, className, leftIcon, handleClick, type = "submit" }: Prop) => {
	return (
		<button
			className={`py-4 px-6 flex gap-2 text-white text-sm font-head font-semibold rounded-md bg-accent ${className}`}
			type={type}
			onClick={handleClick}
		>
			<span>{leftIcon}</span>
			{children}
		</button>
	);
};

export default Button;
