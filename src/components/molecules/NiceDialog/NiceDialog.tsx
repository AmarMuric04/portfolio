import React from "react";
import { useModal } from "@ebay/nice-modal-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface NiceDialogProps {
  title: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

// Bridges @ebay/nice-modal-react state onto a shadcn Dialog: the modal is
// hidden (playing its exit animation) on close and fully removed once focus
// has returned. Every project modal renders through this shell.
const NiceDialog: React.FC<NiceDialogProps> = ({
  title,
  contentClassName = "",
  children,
}) => {
  const modal = useModal();

  return (
    <Dialog
      open={modal.visible}
      onOpenChange={(open) => {
        if (!open) modal.hide();
      }}
      onOpenChangeComplete={(open) => {
        if (!open) modal.remove();
      }}
    >
      <DialogContent
        className={cn(
          "max-h-[85vh] overflow-y-auto sm:max-w-[40rem]",
          contentClassName
        )}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
};

export default NiceDialog;
