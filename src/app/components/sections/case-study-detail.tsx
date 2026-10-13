import { CaseStudy } from "../../models/portfolio-project";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

type CaseStudyDetailProps = {
  study: CaseStudy;
};

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <div className="space-y-6">
      <Card className="border-border/70 bg-card/90">
        <CardContent className="p-6 sm:p-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl">{study.client} Case Study</h1>
          <div className="flex flex-wrap gap-2">
            {study.services.map((service) => (
              <Badge key={service} variant="secondary">
                {service}
              </Badge>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <p><span className="font-medium">Client:</span> {study.client}</p>
            <p><span className="font-medium">Industry:</span> {study.industry}</p>
            <p><span className="font-medium">Timeline:</span> {study.timeline}</p>
            <p><span className="font-medium">Team:</span> {study.team}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border/70 bg-card/90">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl">Challenge</h2>
            <p className="text-muted-foreground">{study.challenge}</p>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl">Solution</h2>
            <p className="text-muted-foreground">{study.solution}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border/70 bg-card/90">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl">Process</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {study.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl">Technology</h2>
            <div className="flex flex-wrap gap-2">
              {study.technology.map((item) => (
                <Badge key={item} variant="outline">{item}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {study.resultsSummary || study.resultsLabel ? (
        <Card className="border-border/70 bg-card/90">
          <CardContent className="p-6 space-y-2">
            <h2 className="text-xl">Results</h2>
            {study.resultsLabel ? <p className="font-medium">{study.resultsLabel}</p> : null}
            {study.resultsSummary ? <p className="text-muted-foreground">{study.resultsSummary}</p> : null}
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
