import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges Tailwind classes safely while supporting conditional logic
export function cn(...inputs: any[]) {
  return twMerge(clsx(...inputs));
}
