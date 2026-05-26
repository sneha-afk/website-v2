import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary" | "disabled";

interface ButtonLinkProps {
  href: string;
  external?: boolean;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  external = false,
  variant = "primary",
  children,
}: ButtonLinkProps) {
  const className = variant === "primary" ? "btn" : `btn-${variant}`;
  const disabled = variant == "disabled";
  const disabledProps = disabled ? { "aria-disabled": true as const } : {};

  if (external) {
    return (
      <a
        href={disabled ? undefined : href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...disabledProps}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} {...disabledProps}>
      {children}
    </Link>
  );
}
