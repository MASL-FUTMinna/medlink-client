type Prop = {
	children: React.ReactNode;
	className?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	handleClick?: () => void;
	type?: "button" | "submit";
};

const Button = ({ children, className, leftIcon, rightIcon,  handleClick, type = "submit" }: Prop) => {
	return (
		<button
			className={`py-4 px-6 flex gap-2 text-white text-sm font-head font-semibold rounded-md bg-accent ${className}`}
			type={type}
			onClick={handleClick}
		>
			<span>{leftIcon}</span>
			{children}
			<span>{rightIcon}</span>
		</button>
	);
};

export default Button;
