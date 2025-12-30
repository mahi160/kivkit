import { Input as InputBase } from "@base-ui/react";
import styles from "./Input.module.css";

function Input({ className, ...props }: InputBase.Props) {
  return (
    <InputBase className={`${styles.Input} ${className || ""}`} {...props} />
  );
}

export { Input };
