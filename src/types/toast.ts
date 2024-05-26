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
