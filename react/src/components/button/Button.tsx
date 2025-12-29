import { Button as ButtonBase } from "@base-ui/react";
import styles from "./Button.module.css";

export type IButtonProps = ButtonBase.Props & {
  variant?: "outline" | "ghost" | "link";
  color?: "secondary" | "danger";
  size?: "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  shape?: "pill" | "circle" | "sharp";
};

export function Button(props: IButtonProps) {
  const { variant, color = "primary", size, shape, className, ...rest } = props;
  return (
    <ButtonBase
      className={`${styles.button} ${className || ""}`}
      data-size={size}
      data-variant={variant}
      data-shape={shape}
      data-color={color}
      {...rest}
    />
  );
}
