import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "mx-2 shrink-0 inline-block h-6 w-6 cursor-pointer bg-contain bg-no-repeat align-middle",
  {
    variants: {
      error: {
        default:
          "disabled:bg-icon-checkbox-dis bg-icon-checkbox checked:bg-icon-checkbox-on",
        error: "bg-icon-checkbox-err",
      },
    },
    defaultVariants: {
      error: "default",
    },
  }
);

interface CheckboxProps
  extends ComponentProps<"input">,
    VariantProps<typeof checkboxVariants> {}

const Checkbox = ({ className, error, ...props }: CheckboxProps) => {
  return (
    <input
      className={cn(
        checkboxVariants({
          error,
          className,
        })
      )}
      {...props}
    />
  );
};

export default Checkbox;
