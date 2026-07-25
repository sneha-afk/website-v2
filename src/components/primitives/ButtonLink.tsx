import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary" | "disabled" | "navigation";

interface BaseProps {
  children: React.ReactNode;
}

type ButtonLinkProps =
  | (BaseProps & {
      variant: "disabled";
      href?: never;
      external?: never;
    })
  | (BaseProps & {
      variant?: Exclude<ButtonVariant, "disabled">;
      href: string;
      external?: boolean;
    });

export function ButtonLink(props: ButtonLinkProps) {
  if (props.variant === "disabled") {
    return (
      <span className="btn-disabled" aria-disabled>
        {props.children}
      </span>
    );
  }

  const { href, external = false, variant = "primary", children } = props;

  const className = variant === "primary" ? "btn" : `btn-${variant}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}
