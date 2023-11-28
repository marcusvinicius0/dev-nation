import { ClassValue, clsx } from "clsx";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

interface ToastifyProps {
  type: string;
  message: string;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
};

export function getCurrentYear() {
  const currYear = new Date().getFullYear();

  return currYear;
};
