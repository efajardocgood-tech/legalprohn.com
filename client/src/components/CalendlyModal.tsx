interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendlyModal({ isOpen, onClose }: CalendlyModalProps) {
  // Redirigir a Google Calendar cuando se abre el modal
  if (isOpen) {
    window.open("https://calendar.app.google/i1RBwSGw7BnoLE6k9", "_blank");
    onClose();
  }

  return null;
}
