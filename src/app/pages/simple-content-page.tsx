import { PageHero } from "../components/sections/page-hero";
import { SharedCta } from "../components/shared/shared-cta";

type SimpleContentPageProps = {
  title: string;
  description: string;
};

export function SimpleContentPage({ title, description }: SimpleContentPageProps) {
  return (
    <>
      <PageHero
        eyebrow="XerveLab"
        title={title}
        description={description}
      />
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Need help now?"
            description="This page is part of the incremental architecture rollout. Use the intake form while detailed content is migrated."
          />
        </div>
      </section>
    </>
  );
}
