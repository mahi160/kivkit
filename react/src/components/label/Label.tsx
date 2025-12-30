import * as React from "react";
import styles from "./Label.module.css";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={`${styles.Label} ${className || ""}`}
      {...props}
    />
  );
}

export { Label };
