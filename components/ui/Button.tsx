type Prop = {
  children: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
};

const Button = ({ children, className, leftIcon }: Prop) => {
  return (
    <button
      className={`py-4 px-6 flex gap-2 text-white text-sm font-head font-semibold rounded-md bg-accent ${className}`}
    >
      <span>{leftIcon}</span>
      {children}
    </button>
  );
};

export default Button;
