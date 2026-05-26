import { Link } from "react-router";

interface ButtonLinkProps {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  children,
  external = false,
}: ButtonLinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className="button">
      {children}
    </Link>
  );
}
