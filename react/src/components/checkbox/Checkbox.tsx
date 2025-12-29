import { Checkbox as CheckboxBase } from "@base-ui/react/checkbox";
import { CheckboxGroup as CheckboxGroupBase } from "@base-ui/react/checkbox-group";
import styles from "./Checkbox.module.css";
import { IconCheck, IconLine } from "@tabler/icons-react";

function Checkbox({
  className,
  color = "primary",
  ...props
}: CheckboxBase.Root.Props & {
  color?: "primary" | "secondary" | "danger";
}) {
  return (
    <CheckboxBase.Root
      className={`${styles.Checkbox} ${className || ""}`}
      data-color={color}
      {...props}
    >
      <CheckboxBase.Indicator
        className={styles.Indicator}
        keepMounted
        render={(indicatorProps, state) => (
          <span {...indicatorProps}>
            {state.indeterminate ? <IconLine /> : <IconCheck />}
          </span>
        )}
      />
    </CheckboxBase.Root>
  );
}

function CheckboxGroup(props: CheckboxGroupBase.Props) {
  const { children, ...rest } = props;
  return (
    <CheckboxGroupBase className={styles.checkboxGroup} {...rest}>
      {children}
    </CheckboxGroupBase>
  );
}

export { Checkbox, CheckboxGroup };
