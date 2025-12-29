import { Avatar as BaseAvatar } from "@base-ui/react";
import styles from "./Avatar.module.css";

function Avatar({ className, ...props }: BaseAvatar.Root.Props) {
  return (
    <BaseAvatar.Root
      className={`${styles.Avatar} ${className || ""}`}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  src,
  alt,
  ...props
}: BaseAvatar.Image.Props) {
  return (
    <BaseAvatar.Image
      className={`${styles.Image} ${className || ""}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }: BaseAvatar.Fallback.Props) {
  return (
    <BaseAvatar.Fallback
      className={`${styles.Fallback} ${className || ""}`}
      {...props}
    />
  );
}

function AvatarGroup({
  children,
  className,
  ...props
}: React.BaseHTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${styles.Group} ${className || ""}`} {...props}>
      {children}
    </div>
  );
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup };
