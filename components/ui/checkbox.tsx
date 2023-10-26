"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { rc } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={rc(
      "peer h-4 w-4 shrink-0 rounded-md border border-green shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green/20 data-[state=checked]:text-green",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={rc("flex items-center justify-center text-current")}
    >
      <CheckIcon className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
