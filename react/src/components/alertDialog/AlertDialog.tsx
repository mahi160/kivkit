import { AlertDialog as AlertDialogBase } from "@base-ui/react/alert-dialog";
import styles from "./AlertDialog.module.css";
import { Button } from "../button/Button";

function AlertDialog({ ...props }: AlertDialogBase.Root.Props) {
  return <AlertDialogBase.Root {...props} />;
}

function AlertDialogTrigger({ ...props }: AlertDialogBase.Trigger.Props) {
  return <AlertDialogBase.Trigger {...props} />;
}

function AlertDialogPopup({
  className,
  size = "default",
  ...props
}: AlertDialogBase.Popup.Props & {
  size?: "default" | "sm";
}) {
  return (
    <AlertDialogBase.Portal>
      <AlertDialogBase.Backdrop className={styles.Backdrop} />
      <AlertDialogBase.Popup
        data-size={size}
        className={`${styles.Popup} ${className || ""}`}
        {...props}
      />
    </AlertDialogBase.Portal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={`${styles.Header} ${className || ""}`} {...props} />;
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogBase.Title>) {
  return (
    <AlertDialogBase.Title
      className={`${styles.Title} ${className || ""}`}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogBase.Description>) {
  return (
    <AlertDialogBase.Description
      className={`${styles.Description} ${className || ""}`}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={`${styles.Footer} ${className || ""}`} {...props} />;
}

function AlertDialogAction(props: React.ComponentProps<typeof Button>) {
  return <Button {...props} />;
}

function AlertDialogCancel({
  variant = "outline",
  size,
  ...props
}: AlertDialogBase.Close.Props &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <AlertDialogBase.Close
      render={<Button variant={variant} size={size} color="danger" />}
      {...props}
    />
  );
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogPopup,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
};
