import { RadioGroup as RadioGroupBase } from "@base-ui/react/radio-group";
import { Radio as RadioBase } from "@base-ui/react/radio";
import styles from "./RadioGroup.module.css";

function RadioGroup({ className, ...props }: RadioGroupBase.Props) {
  return (
    <RadioGroupBase
      className={`${styles.RadioGroup} ${className || ""}`}
      {...props}
    />
  );
}

function RadioItem({ className, children, ...props }: RadioBase.Root.Props) {
  return (
    <RadioBase.Root className={`${styles.Item} ${className || ""}`} {...props}>
      <RadioBase.Indicator className={styles.Indicator}>H</RadioBase.Indicator>
      {children}
    </RadioBase.Root>
  );
}

export { RadioGroup, RadioItem };
