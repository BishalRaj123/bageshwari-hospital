import * as React from "react";

import { cn } from "@/lib/utils";

// Card Component
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-emerald-600 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900 dark:to-teal-900 text-card-foreground shadow-md transition-all duration-300 hover:shadow-lg hover:border-emerald-700",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// CardHeader Component
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-6 bg-emerald-100/50 dark:bg-emerald-800/50 rounded-t-xl",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// CardTitle Component
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-emerald-900 dark:text-emerald-100",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// CardDescription Component
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-emerald-700 dark:text-emerald-300 leading-relaxed",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// CardContent Component
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-6 pt-0 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-emerald-200 dark:border-emerald-700 transition-all duration-300",
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

// CardFooter Component
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0 border-t border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-900/50",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };