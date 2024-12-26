import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TCButton = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
} ;

export const CButton: React.FC<TCButton> = ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={twMerge(
        "px-6 py-2 w-48 text-sm font-semibold border-2 rounded transition ease-in duration-500 text-black bg-white hover:text-white hover:bg-black",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
