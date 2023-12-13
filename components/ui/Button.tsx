type Prop = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: Prop) => {
  return (
    <button
      className={`py-4 px-6 text-white text-sm font-head font-semibold rounded-md bg-accent ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
