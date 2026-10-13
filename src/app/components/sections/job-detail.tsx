import { JobOpening } from "../../models/job-opening";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

type JobDetailProps = {
  job: JobOpening;
};

export function JobDetail({ job }: JobDetailProps) {
  return (
    <div className="space-y-6">
      <Card className="border-border/70 bg-card/90">
        <CardContent className="p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{job.category}</Badge>
            <Badge variant="outline">{job.employmentType}</Badge>
            <Badge variant="outline">{job.workSetup}</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl">{job.title}</h1>
          <p className="text-muted-foreground">{job.description}</p>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border/70 bg-card/90">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl">Responsibilities</h2>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              {job.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl">Requirements</h2>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/70 bg-card/90">
        <CardContent className="p-6 space-y-3">
          <h2 className="text-xl">Preferred Qualifications</h2>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            {job.preferredQualifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
