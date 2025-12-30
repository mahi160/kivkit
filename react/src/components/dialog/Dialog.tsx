import { Dialog as DialogBase } from "@base-ui/react/dialog";
import styles from "./Dialog.module.css";
import { IconX } from "@tabler/icons-react";

function Dialog({ ...props }: React.ComponentProps<typeof DialogBase.Root>) {
  return <DialogBase.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogBase.Trigger>) {
  return <DialogBase.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogBase.Portal>) {
  return <DialogBase.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogBase.Close>) {
  return <DialogBase.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogBase.Backdrop>) {
  return (
    <DialogBase.Backdrop
      data-slot="dialog-overlay"
      className={`${styles.Overlay} ${className || ""}`}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogBase.Popup> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogBase.Popup
        data-slot="dialog-content"
        className={`${styles.Content} ${className || ""}`}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogBase.Close
            data-slot="dialog-close"
            className={styles.CloseButton}
          >
            <IconX />
            <span className="sr-only">Close</span>
          </DialogBase.Close>
        )}
      </DialogBase.Popup>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={`${styles.Header} ${className || ""}`}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={`${styles.Footer} ${className || ""}`}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogBase.Title>) {
  return (
    <DialogBase.Title
      data-slot="dialog-title"
      className={`${styles.Title} ${className || ""}`}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogBase.Description>) {
  return (
    <DialogBase.Description
      data-slot="dialog-description"
      className={`${styles.Description} ${className || ""}`}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
