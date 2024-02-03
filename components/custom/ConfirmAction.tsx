import { IoMdCloseCircleOutline } from "react-icons/io";
import { Button } from "../ui/Button";
import { Dialog, DialogContent } from "../ui/dialog";
import { FaRegCheckCircle } from "react-icons/fa";

interface ConfirmActionProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel?: () => void;
  message: string;
  onContinue: () => void;
  isLoading?: boolean;
}

export default function ConfirmAction({
  isOpen,
  onClose,
  onCancel,
  message,
  onContinue,
  isLoading,
}: ConfirmActionProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="min-w-[400px] space-y-6"
        style={{ padding: 32 }}
      >
        <p className="text-xl text-center ">{message}</p>

        <div className="flex items-center justify-center gap-5">
          <Button
            onClick={onCancel || onClose}
            variant="error"
            size="sm"
            className="text-red-500 "
            disabled={isLoading}
          >
            <IoMdCloseCircleOutline className="text-base -mr-1" />
            No
          </Button>
          <Button
            onClick={onContinue}
            size="sm"
            // className="w-[160px]"
            isLoading={isLoading}
          >
            <FaRegCheckCircle className="text-base -mr-1" />
            Yes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
