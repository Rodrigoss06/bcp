import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";
import { cn } from "./utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-2 text-sm inline-flex items-center gap-2", // 👈 inline-flex y gap limpio
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-gray-800 border-gray-300",
        success: "bg-green-100 text-green-800 border-green-300",
        warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
        destructive: "bg-red-100 text-red-800 border-red-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("font-semibold leading-snug", className)} // 👈 sin min-height
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-sm leading-snug", className)} // 👈 no reserva espacio vacío
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
