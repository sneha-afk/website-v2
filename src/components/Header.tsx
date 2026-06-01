import { ButtonLink } from "./primitives/ButtonLink";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <ul>
        <ButtonLink href="/" variant="navigation" children={"~/"} />
        <ButtonLink href="/about" variant="navigation" children={"/about"} />
      </ul>
    </header>
  );
}
