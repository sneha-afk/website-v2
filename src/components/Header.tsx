import { ButtonLink } from "./primitives/ButtonLink";
import { ThemeToggle } from "./ThemeToggle";
import "../styles/components/_header.scss";

interface HeaderProps {
  className?: string;
}

// [actual href, display]
const links: [string, string][] = [
  ["/", "~/"],
  ["/resume", "/resume"],
];

export function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <h1 className="site-title">
        <a href="/" style={{ textDecoration: "none" }}>
          Sneha De
        </a>
      </h1>
      <ul className="navbar">
        {links.map(([href, name]) => (
          <li key={href}>
            <ButtonLink href={href} variant="navigation">
              {name}
            </ButtonLink>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </header>
  );
}
