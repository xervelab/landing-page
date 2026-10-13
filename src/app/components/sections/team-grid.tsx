import { TeamMember } from "../../models/team-member";
import { TeamCard } from "../cards/team-card";

type TeamGridProps = {
  members: TeamMember[];
};

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {members.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
}
