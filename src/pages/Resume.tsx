import { Card } from "../components/primitives/Card.tsx";
import { ResumeEntry } from "../components/ResumeEntry.tsx";

const skillsProgrammingLanguages: string[] = [
  "C",
  "C++",
  "Python",
  "Go",
  "Java",
  "TypeScript",
  "Ruby",
  "SQL",
];

const skillsFrameworks: string[] = [
  "Keras",
  "NumPy",
  "PyTorch",
  "React",
  "gpiozero",
];

const skillsToolsPlats: string[] = [
  "Git",
  "Linux (Ubuntu, WSL)",
  "GNU Make",
  "Markdown",
  "LaTeX",
  "Postman",
  "Splunk",
  "Grafana",
];

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

      <div className="resume">
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
              Collaborated on enabling logit bias adjustments to prioritize
              tokens for fine-tuned LLM outputs:{" "}
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

        <h2>Skills</h2>
        <h3>Programming Languages</h3>
        <ul className="resume-skill-list">
          {skillsProgrammingLanguages.map((skill) => (
            <li className="resume-pill">{skill}</li>
          ))}
        </ul>

        <h3>Frameworks and Libraries</h3>
        <ul className="resume-skill-list">
          {skillsFrameworks.map((skill) => (
            <li className="resume-pill">{skill}</li>
          ))}
        </ul>

        <h3>Tools and Platforms</h3>
        <ul className="resume-skill-list">
          {skillsToolsPlats.map((skill) => (
            <li className="resume-pill">{skill}</li>
          ))}
        </ul>

        <h2>Education</h2>
        <ResumeEntry
          title="University of California, San Diego"
          date="Sept. 2024 - Dec. 2025"
          location="La Jolla, CA"
          subtitle="M.S. in Computer Science; Specialization in AI/ML; GPA: 3.91"
        />
        <ResumeEntry
          title="University of California, Santa Cruz"
          date="Sept. 2022 - Jun. 2024"
          location="Santa Cruz, CA"
          subtitle="B.S. in Computer Science; GPA: 3.95"
        />
      </div>
    </>
  );
}
