import React from "react";
import { type ButtonProps } from "@/interfaces";

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const shapeClasses: Record<NonNullable<ButtonProps["shape"]>, string> = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-blue-600 text-white font-medium shadow-md 
        hover:bg-blue-700 transition-colors
        ${sizeClasses[size]} ${shapeClasses[shape]} ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
