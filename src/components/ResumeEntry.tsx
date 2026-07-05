import { Card } from "../components/primitives/Card.tsx";

export interface ResumeEntryProps {
  title: string;
  employer: string;
  date: string;
  location: string;
  children?: React.ReactNode;
}

export function ResumeEntry({
  title,
  employer,
  date,
  location,
  children,
}: ResumeEntryProps) {
  return (
    <Card>
      <div className="resume-header">
        <h1 className="resume-job-title">{title}</h1>
        <h2 className="resume-employer">{employer}</h2>
        <p className="resume-job-date">{date}</p>
        <p className="resume-job-location">{location}</p>
      </div>
      {children}
    </Card>
  );
}
