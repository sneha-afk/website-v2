import { BackLink } from "../components/primitives/BackLink";
import { ButtonLink } from "../components/primitives/ButtonLink.tsx";

export function Home() {
  return (
    <>
      <h1>hi</h1>

      <BackLink />

      <br />
      <br />
      <ButtonLink href="google.com">"here's a button"</ButtonLink>
      <ButtonLink href="google.com" variant="secondary">
        "here's a secondary button"
      </ButtonLink>
      <ButtonLink href="google.com" variant="disabled">
        "here's a disabled button"
      </ButtonLink>
      <br />
    </>
  );
}
