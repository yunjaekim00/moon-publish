import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-block text-center", {
  variants: {
    bgcolor: {
      default: "bg-primary text-white",
      primary: "bg-primary text-white",
      black: "bg-black text-white",
      gray600: "bg-gray-600 text-white",
      gray100: "bg-gray-100 text-black",
      white: "bg-white text-black",
    },
    border: {
      default: "border border-transparent",
      black: "border border-black",
      gray: "border border-gray-400",
    },
    size: {
      default: "min-w-32 h-11 px-3 text-base font-bold",
      xs: "min-w-24 h-8 px-2 text-sm font-medium md:px-3 md:min-w-32",
      sm: "min-w-32 h-10 px-3 text-sm font-medium",
      rg: "min-w-32 h-11 px-3 text-base font-bold",
      lg: "min-w-32 h-12 px-3 text-base font-bold",
      xl: "min-w-40 h-16 px-3 text-lg font-bold",
    },
    rounded: {
      default: "rounded-full",
      none: "rounded-none",
      xl: "rounded-xl",
    },
  },
  defaultVariants: {
    bgcolor: "default",
    border: "default",
    size: "default",
    rounded: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  className,
  bgcolor,
  border,
  size,
  rounded,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({
          bgcolor,
          border,
          size,
          rounded,
          className,
        })
      )}
      {...props}
    />
  );
};

export default Button;
