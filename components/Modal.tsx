import { Dispatch, SetStateAction } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import useMediaQuery from "@/lib/useMediaQuery";

export default function Modal({
  children,
  className,
  showModal,
  setShowModal,
}: {
  children: React.ReactNode;
  className?: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog.Root open={showModal} onOpenChange={setShowModal}>
      <Dialog.Portal>
        <Dialog.Overlay
          // for detecting when there's an active opened modal
          id="modal-backdrop"
          className="animate-fade-in fixed inset-0 z-40 bg-[#000] bg-opacity-40 "
        />
        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          className={`animate-scale-in fixed inset-0 z-50 m-auto h-fit max-h-[90vh] max-h-[90dvh] w-[90%] max-w-md overflow-auto rounded-xl border border-gray-200 bg-white p-0 shadow-xl ${className}`}
          // Improve scrolling on iOS devices
          style={{ WebkitOverflowScrolling: "touch"}}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
