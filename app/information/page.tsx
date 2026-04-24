import Link from "next/link";
import InfoSection from "../components/InfoSection";
import SiteFrame from "../components/SiteFrame";
import { aboutSections, siteProfile } from "../site-data";

export default function InformationPage() {
 return (
  <SiteFrame>
   <article>
   <header className="type-display grid grid-cols-[1fr_auto] gap-[var(--space-gap)] border-b rule-border p-[var(--space-page)]">
     <h1 className="accent-text">About</h1>
     <Link href="/" className="accent-text">Index</Link>
    </header>

    <section className="grid border-b rule-border sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
     <p className="type-display border-b rule-border p-[var(--space-page)] text-black/40 sm:border-b-0 sm:border-r">
      Junior Developer
      <br />
      {siteProfile.title}
     </p>
     <p className="type-display p-[var(--space-page)]">
      I build simple, maintainable web interfaces with a focus on readable structure, responsive layouts, and practical full stack development.
     </p>
    </section>

    {aboutSections.map((section, index) => (
     <InfoSection key={section.title} title={section.title} last={index === aboutSections.length - 1}>
      {section.lines.map((line) => (
       <p key={`${section.title}-${line}`}>{line}</p>
      ))}
     </InfoSection>
    ))}
   </article>
  </SiteFrame>
 );
}
