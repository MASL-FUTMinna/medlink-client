type Prop = {
	children: React.ReactNode;
	disabled?: boolean;
	className?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	handleClick?: () => void;
	type?: "button" | "submit";
};

const Button = ({ children, disabled, className, leftIcon, rightIcon,  handleClick, type = "submit" }: Prop) => {
	return (
		<button
			className={`py-4 px-6 flex gap-2 text-white text-sm font-head font-semibold rounded-md bg-accent  ${disabled ? "opacity-40" : ""} ${className}`}
			type={type}
			onClick={handleClick}
			disabled={disabled}
		>
			<span>{leftIcon}</span>
			{children}
			<span>{rightIcon}</span>
		</button>
	);
};

export default Button;
