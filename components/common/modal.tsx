import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({
  open,
  onOpenChange,
  icon,
  title,
  children,
}: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="px-2 font-medium text-base mini:text-xl">
            <div className="flex items-center">
              <div className="h-5 mr-1">{icon}</div>
              {title}
            </div>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[500px]">
          <div className="p-2">{children}</div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
