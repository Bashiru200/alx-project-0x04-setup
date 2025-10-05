export interface CardProps {
    title: string;
    content: string;
}
export interface ButtonProps {
    buttonBackgroundColor: string;
    buttonLabel: string;
    label: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    onClick?: () => void;
    className?: string; // allow passing extra styles if needed
  }
  