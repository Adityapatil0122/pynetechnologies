import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-extrabold transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--foreground)] text-white shadow-[0_16px_34px_rgba(30,34,51,0.18)] hover:-translate-y-0.5 hover:bg-[#30364b]",
        pop:
          "bg-[var(--lime)] text-[var(--foreground)] shadow-[0_16px_34px_rgba(123,194,0,0.18)] hover:-translate-y-0.5 hover:bg-[#ccff5f]",
        cyan:
          "bg-[var(--primary)] text-white shadow-[0_16px_34px_rgba(0,184,255,0.22)] hover:-translate-y-0.5 hover:bg-[var(--primary-strong)]",
        outline:
          "border border-[rgba(30,34,51,0.16)] bg-white/80 text-[var(--foreground)] hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-white"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-7 text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
