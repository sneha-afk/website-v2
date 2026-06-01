import { ButtonLink } from "./primitives/ButtonLink";
import { ThemeToggle } from "./ThemeToggle";
import "../styles/components/_header.scss";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <h1 className="site-title">Sneha De</h1>
      <ul className="navbar">
        <li>
          <ButtonLink href="/" variant="navigation">
            ~/
          </ButtonLink>
        </li>
        <li>
          <ButtonLink href="/about" variant="navigation">
            /about
          </ButtonLink>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </header>
  );
}
