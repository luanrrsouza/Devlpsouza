"use client";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  details: string;
};

export default function ServiceModal({ open, onClose, title, details }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-3xl rounded-2xl bg-background border border-white/10 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="rounded-md border px-3 py-1 text-sm"
            >
              Fechar
            </button>
          </div>
          <div className="p-6">
            <p className="text-black/80 dark:text-white/80 whitespace-pre-line">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
