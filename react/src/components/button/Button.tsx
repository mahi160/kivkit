import { Button as ButtonBase } from "@base-ui/react";
import styles from "./Button.module.css";

export type IButtonProps = ButtonBase.Props & {
  variant?: "outline" | "ghost" | "link";
  color?: "primary" | "secondary" | "danger";
  size?: "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  shape?: "pill" | "circle" | "sharp";
};
export const Button: React.FC<IButtonProps> = (props) => {
  const {
    size = "default",
    variant = "default",
    shape = "default",
    color = "primary",
    ...rest
  } = props;
  return (
    <ButtonBase
      className={styles.Button}
      data-size={size}
      data-variant={variant}
      data-shape={shape}
      data-color={color}
      {...rest}
    />
  );
};
