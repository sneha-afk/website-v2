import { ButtonLink } from "./primitives/ButtonLink";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <ul>
        <ButtonLink href="/" variant="navigation" children={"~/"} />
      </ul>
    </footer>
  );
}
