export interface ToastProviderProps {
  children: React.ReactElement;
}

export interface ToastProviderStateProps {
  title: string;
  description: string;
  color: string;
  id: number;
}

export interface ToastType {
  title: string;
  description: string;
  color: string;
  close: () => void;
}

export interface ToastContextValue {
  open: (title: string, description: string, color: string) => void
  close: (id: number) => void;
}

