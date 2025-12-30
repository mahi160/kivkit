import { Switch as SwitchBase } from "@base-ui/react/switch";
import styles from "./Switch.module.css";

function Switch({
  className,
  color,
  size,
  ...props
}: SwitchBase.Root.Props & {
  color?: "primary" | "secondary" | "danger";
  size?: "sm" | "lg";
}) {
  return (
    <SwitchBase.Root
      data-color={color}
      data-size={size}
      className={`${styles.Switch} ${className || ""}`}
      {...props}
    >
      <SwitchBase.Thumb className={styles.thumb} />
    </SwitchBase.Root>
  );
}

export { Switch };
