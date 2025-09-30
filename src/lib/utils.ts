import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines class names conditionally and merges Tailwind classes safely.
 * Equivalent to `clsx` + `tailwind-merge`
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}