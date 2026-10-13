import * as React from "react";

export type ToastActionElement = React.ReactElement;
export type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: "default" | "destructive";
  duration?: number;
};

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={`rounded-md border bg-background p-4 shadow-lg ${className}`} {...props}>
      {children}
    </div>
  ),
);
Toast.displayName = "Toast";

const ToastClose = ({ className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button type="button" aria-label="Cerrar notificación" className={`ml-auto text-muted-foreground ${className}`} {...props}>×</button>
);

const ToastDescription = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`text-sm text-muted-foreground ${className}`} {...props} />
);

const ToastProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const ToastTitle = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`font-semibold ${className}`} {...props} />
);
const ToastViewport = () => <div className="fixed right-4 top-4 z-50 flex w-96 max-w-[calc(100vw-2rem)] flex-col gap-2" />;

export { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport };
