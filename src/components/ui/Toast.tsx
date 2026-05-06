import { CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface ToastState {
  message: string;
}

interface ToastProps {
  toast: ToastState | null;
}

export function Toast({ toast }: ToastProps) {
  return (
    <AnimatePresence>
      {toast ? (
        <motion.div
          className="fixed bottom-5 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-3 rounded-sm border border-gold-400/40 bg-graphite-950 px-5 py-3 text-sm font-medium text-white shadow-premium"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
        >
          <CheckCircle2 className="text-gold-400" size={18} />
          <span>{toast.message}</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
