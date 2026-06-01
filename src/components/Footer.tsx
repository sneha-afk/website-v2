interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <ul className="navbar"></ul>
    </footer>
  );
}
