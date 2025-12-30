import styles from "./Textarea.module.css";

function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`${styles.Textarea} ${className || ""}`}
      {...props}
    ></textarea>
  );
}

export { Textarea };
