import { forwardRef } from "react";
import { RiLoader4Fill } from "react-icons/ri";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: "text" | "outline" | "solid" | "icon";

  text?: string | React.ReactNode;
}

const variantClasses = {
  text: "text-dark dark:text-light",
  outline:
    "bg-transparent border border-light-800 text-dark hover:bg-light-400/50 focus:bg-light-500",
  solid: "bg-brand/80 text-light hover:bg-brand/80 focus:bg-brand/80",
  icon: "transition-colors duration-200 text-dark-800 hover:text-dark-900 dark:hover:text-light-600",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      isLoading,
      disabled,
      children,
      text,
      variant = "solid",
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      className={`
        hover:opacity-80
        transition-fill-colors font-nunito text-sm flex items-center justify-center gap-2 font-semibold duration-200
         min-h-[38px] sm:h-8 rounded-md py-3 px-4 md:px-5
        ${
          isLoading || disabled
            ? "pointer-events-none cursor-not-allowed"
            : "pointer-events-auto cursor-pointer"
        }
        ${disabled ? "opacity-70" : "opacity-100"}
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {isLoading && <RiLoader4Fill className="h-auto w-5 animate-spin" />}
      {text}
    </button>
  ),
);

Button.displayName = "Button";
export default Button;
