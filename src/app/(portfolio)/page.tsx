import Link from "next/link";
import { Hero } from "@/components/home";
import { AppShowcase, ContactCta, SectionHead, WorkList } from "@/components/shared";
import { EXPERIENCE } from "@/lib/constants";

const RECENT_WORK = EXPERIENCE.slice(0, 3).map((job) => ({
  period: job.period,
  title: job.title,
  place: `${job.company}, ${job.location.split(",")[0]}`,
  description: job.description,
}));

export default function Home() {
  return (
    <div className="wrap">
      <Hero />

      <section>
        <SectionHead
          title={
            <>
              Apps I build
              <br />
              and run
            </>
          }
        >
          Each one designed, built and shipped by me, from the first sketch to the store listing.
        </SectionHead>
        <AppShowcase />
      </section>

      <section>
        <SectionHead title="Work">Ten years on product teams, from Ankara to Berlin.</SectionHead>
        <WorkList items={RECENT_WORK} />
        <Link href="/experience" className="survey-link mt-8 inline-block font-medium">
          All work and education
        </Link>
      </section>

      <ContactCta />
    </div>
  );
}
