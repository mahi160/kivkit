import * as React from "react";
import styles from "./InputGroup.module.css";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Textarea } from "../textarea/Textarea";

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={`${styles.inputGroup} ${className || ""}`}
      {...props}
    />
  );
}

interface InputGroupAddonProps extends React.ComponentProps<"div"> {
  align?: "inline-start" | "inline-end" | "block-start" | "block-end";
}

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: InputGroupAddonProps) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={`${styles.inputGroupAddon} ${styles[`addon-${align}`]} ${className || ""}`}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    />
  );
}

interface InputGroupButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "size" | "type"> {
  variant?: "outline" | "ghost" | "link";
  color?: "secondary" | "danger";
  size?: "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  shape?: "pill" | "circle" | "sharp";
  type?: "button" | "submit" | "reset";
}

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "sm",
  ...props
}: InputGroupButtonProps) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={`${styles.inputGroupButton} ${styles[`button-${size}`]} ${className || ""}`}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={`${styles.inputGroupText} ${className || ""}`}
      {...props}
    />
  );
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={`${styles.inputGroupInput} ${className || ""}`}
      {...props}
    />
  );
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={`${styles.inputGroupTextarea} ${className || ""}`}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
