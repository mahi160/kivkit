import * as React from "react";
import styles from "./Kbd.module.css";

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={`${styles.Kbd} ${className || ""}`}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="kbd-group"
      className={`${styles.Group} ${className || ""}`}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
