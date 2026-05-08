import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, title, onClose, children }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );

        if (!focusableElements?.length) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(13,13,11,0.76)] px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="presentation"
          onMouseDown={onClose}
        >
          <motion.div
            ref={dialogRef}
            className="max-h-[88vh] w-full max-w-5xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-paper)] shadow-[0_32px_120px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[rgba(20,19,15,0.14)] px-5 py-4 sm:px-7">
              <h3 id="modal-title" className="text-lg font-bold leading-tight text-[var(--color-text-dark)]">
                {title}
              </h3>
              <button
                ref={closeButtonRef}
                className="focus-ring inline-flex size-10 items-center justify-center border border-[rgba(20,19,15,0.14)] text-[var(--color-text-muted-dark)] transition hover:border-[var(--color-accent)] hover:bg-white/50 hover:text-[var(--color-text-dark)]"
                type="button"
                aria-label="Закрыть окно"
                onClick={onClose}
              >
                <X size={18} />
              </button>
            </div>
            <div className="max-h-[calc(88vh-73px)] overflow-y-auto px-5 py-6 sm:px-7">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
