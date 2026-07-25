import { ButtonLink } from "../components/primitives/ButtonLink.tsx";
import { Columns } from "../components/primitives/Columns.tsx";
import { Card } from "../components/primitives/Card.tsx";
import { ThemeToggle } from "../components/ThemeToggle.tsx";
import { ResumeEntry } from "../components/ResumeEntry.tsx";

export function KitchenSink() {
  return (
    <>
      <p>
        hello! did you look through <code>main.tsx</code> to find this?
      </p>
      <p>here is a kitchen sink page for your viewing.</p>
      <hr />

      <p>
        The sans serif font is Schibsted Grotesk, and the{" "}
        <code>monospace font is Geist Mono.</code>
      </p>

      <p>
        <a href="https://github.com">a link</a>
      </p>

      <ul>
        <li>unordered</li>
        <li>list</li>
      </ul>

      <ol>
        <li>ordered</li>
        <li>list</li>
      </ol>

      <Columns
        left={
          <p>
            this theme toggle button's icon won't sync with the global on at the
            top, thats fine.
          </p>
        }
        right={<ThemeToggle />}
      />

      <ButtonLink href=".">"here's a button"</ButtonLink>
      <ButtonLink href="." variant="secondary">
        "here's a secondary button"
      </ButtonLink>
      <ButtonLink variant="disabled">"here's a disabled button"</ButtonLink>
      <br />
      <br />

      <Card>
        <ul>
          <li>bullet points</li>
          <li>in a card</li>
        </ul>
      </Card>

      <ResumeEntry
        title="job title"
        employer="employer"
        date="date"
        location="location"
      >
        <ul className="resume-item-list">
          <li>job details</li>
        </ul>
      </ResumeEntry>
    </>
  );
}
