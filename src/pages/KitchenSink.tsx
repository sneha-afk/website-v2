import { ButtonLink } from "../components/primitives/ButtonLink.tsx";
import { ThemeToggle } from "../components/ThemeToggle.tsx";

export function KitchenSink() {
  return (
    <>
      <p>
        hello! did you look through <code>main.tsx</code> to find this?
      </p>
      <p>here is a kitchen sink page for your viewing.</p>
      <hr />

      <p>
        <a href="https://github.com">a link</a>
      </p>

      <div>
        <p>
          this theme toggle button's icon won't sync with the global on at the
          top, thats fine.
        </p>
        <ThemeToggle />
      </div>

      <ButtonLink href="/">"here's a button"</ButtonLink>
      <ButtonLink href="/" variant="secondary">
        "here's a secondary button"
      </ButtonLink>
      <ButtonLink href="/" variant="disabled">
        "here's a disabled button"
      </ButtonLink>
      <br />
    </>
  );
}
