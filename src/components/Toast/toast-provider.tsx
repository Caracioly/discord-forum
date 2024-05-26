import { ToastContext } from "@/context/Toast";
import { ToastProviderProps, ToastProviderStateProps } from "@/types/toast";
import { useMemo, useState } from "react";

import { Toast } from "@/components/Toast/toast";

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastProviderStateProps[]>([]);

  function openToast(title: string, description: string, color: string) {
    const newToast = {
      id: Date.now(),
      title,
      description,
      color,
    };
    setToasts((previousToasts) => [...previousToasts, newToast]);

    setTimeout(() => closeToast(newToast.id), 3500)
  }

  function closeToast(id: number) {
    setToasts((previousToasts) =>
      previousToasts.filter((toast) => toast.id !== id)
    );
  }

  const contextValue = useMemo(
    () => ({
      open: openToast,
      close: closeToast,
    }),
    []
  );

  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {children}
          {toasts &&
            toasts.map((toast) => {
              return (
                <Toast
                  key={toast.id}
                  description={toast.description}
                  title={toast.title}
                  color={toast.color}
                  close={() => closeToast(toast.id)}
                />
              );
            })}
      </ToastContext.Provider>
    </>
  );
}
