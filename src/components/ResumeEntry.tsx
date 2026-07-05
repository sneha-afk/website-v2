import { Card } from "../components/primitives/Card.tsx";

export interface ResumeEntryProps {
  title: string;
  employer?: string;
  subtitle?: string;
  date: string;
  location: string;
  children?: React.ReactNode;
}

export function ResumeEntry({
  title,
  employer,
  subtitle,
  date,
  location,
  children,
}: ResumeEntryProps) {
  return (
    <Card>
      <div className="resume-header">
        <h1 className="resume-header-job-title">{title}</h1>
        <h2 className="resume-header-employer">{employer}</h2>
        <p className="resume-header-subtitle">{subtitle}</p>
        <p className="resume-header-job-date">{date}</p>
        <p className="resume-header-job-location">{location}</p>
      </div>
      {children}
    </Card>
  );
}
