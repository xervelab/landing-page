import { JobOpening } from "../../models/job-opening";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

type JobCardProps = {
  job: JobOpening;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="h-full border-border/70 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex h-full flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{job.category}</Badge>
          <Badge variant="outline">{job.employmentType}</Badge>
          <Badge variant="outline">{job.workSetup}</Badge>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl">{job.title}</h3>
          <p className="text-muted-foreground text-sm">{job.description}</p>
        </div>

        <div className="grid gap-3 text-sm text-muted-foreground">
          <div>
            <p className="font-medium text-foreground">Responsibilities</p>
            <p>{job.responsibilities.slice(0, 2).join(" ")}</p>
          </div>
          <div>
            <p className="font-medium text-foreground">Requirements</p>
            <p>{job.requirements.slice(0, 2).join(" ")}</p>
          </div>
          <div>
            <p className="font-medium text-foreground">Preferred Qualifications</p>
            <p>{job.preferredQualifications.slice(0, 1).join(" ")}</p>
          </div>
        </div>

        <div className="mt-auto pt-2">
          <Button asChild className="w-full sm:w-auto">
            <a href={`#/careers/${job.slug}`}>Apply for this role</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
