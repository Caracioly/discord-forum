//import { ToastContextValue } from "@/types/toast";
import { createContext, useContext } from "react";

type ToastContextValue = {
  open: (title: string, description: string, color: string) => void
  close: (id: number) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null)

export const useToast = () => useContext(ToastContext)