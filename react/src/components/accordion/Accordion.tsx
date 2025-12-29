import { Accordion as AccordionBase } from "@base-ui/react";
import style from "./Accordion.module.css";
import { IconChevronDown } from "@tabler/icons-react";

export function Accordion({ className, ...props }: AccordionBase.Root.Props) {
  return (
    <AccordionBase.Root
      className={`${style.accordion} ${className || ""}`}
      {...props}
    />
  );
}

export function AccordionItem({
  className,
  ...props
}: AccordionBase.Item.Props) {
  return (
    <AccordionBase.Item
      className={`${style.accordionItem} ${className || ""}`}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionBase.Trigger.Props) {
  return (
    <AccordionBase.Header className={style.accordionTriggerHeader}>
      <AccordionBase.Trigger
        className={`${style.accordionTrigger} ${className || ""}`}
        {...props}
      >
        {children}
        <IconChevronDown className={style.chevronIcon} />
      </AccordionBase.Trigger>
    </AccordionBase.Header>
  );
}

export function AccordionPanel({
  className,
  children,
  ...props
}: AccordionBase.Panel.Props) {
  return (
    <AccordionBase.Panel
      className={`${style.accordionPanel} ${className || ""}`}
      {...props}
    >
      <div className={style.accordionInner}>{children}</div>
    </AccordionBase.Panel>
  );
}
