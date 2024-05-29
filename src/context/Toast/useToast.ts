import { ToastContextValue } from "@/types/toast";
import { createContext, useContext } from "react";

export const ToastContext = createContext<ToastContextValue | null>(null)

export const useToast = () => useContext(ToastContext)