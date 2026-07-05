import { ResumeEntry } from "../components/ResumeEntry.tsx";

export function Resume() {
  return (
    <>
      <h1>/resume</h1>

      <p>
        Not a fan of having my contact details available to web crawlers, feel
        free to contact me on{" "}
        <a href="https://www.linkedin.com/in/sneha-de/">LinkedIn</a>!
      </p>
      <hr />

      <h2>Experience</h2>
      <ResumeEntry
        title="Software Engineer"
        employer="Stripe"
        date="Jan. 2026 - Present"
        location="South San Francisco, CA"
      />

      <ResumeEntry
        title="Software Engineer Intern"
        employer="Stripe"
        date="Jun. 2025 - Sep. 2025"
        location="South San Francisco, CA"
      />

      <ResumeEntry
        title="Group Tutor"
        employer="Baskin School of Engineering, University of California, Santa Cruz"
        date="Sep. 2023 - Jun.2024"
        location="Santa Cruz, CA"
      >
        <p>
          Mentored 400+ undergraduates on C programming and using UNIX
          development tools, including compilers (clang/gcc), build automation
          with Makefiles, memory debugging with Valgrind, and Bash scripting
        </p>
      </ResumeEntry>

      <ResumeEntry
        title="Software Engineering Intern"
        employer="CodeDay"
        date="Jun. 2023 - Aug. 2023"
        location="Remote"
      >
        <ul className="resume-item-list">
          <li>
            Contributed to{" "}
            <a href="https://github.com/microsoft/semantic-kernel">
              Microsoft’s <i>Semantic Kernel</i>
            </a>{" "}
            , an open-source multi-language SDK for AI orchestration
          </li>
          <li>
            Collaborated on enabling logit bias adjustments to prioritize tokens
            for fine-tuned LLM outputs:{" "}
            <a href="https://github.com/microsoft/semantic-kernel/pull/1880">
              (PR #1880)
            </a>
          </li>
          <li>
            Integrated Redis vector embedding storage with configurable ANN
            indexing (HNSW/FLAT) and similarity metrics to enable low-latency,
            RAG-driven retrieval from user-provided datasets:{" "}
            <a href="https://github.com/microsoft/semantic-kernel/pull/2132">
              (PR #2132)
            </a>
          </li>
        </ul>
      </ResumeEntry>
    </>
  );
}
