import Link from "next/link";
import InfoSection from "../components/InfoSection";
import SiteFrame from "../components/SiteFrame";
import { siteProfile } from "../site-data";

export default function ContactPage() {
 return (
  <SiteFrame>
   <article>
   <header className="type-display grid grid-cols-[1fr_auto] gap-[var(--space-gap)] border-b rule-border p-[var(--space-page)]">
     <h1 className="accent-text">Contact</h1>
     <Link href="/" className="accent-text">Index</Link>
    </header>

    <section className="grid border-b rule-border sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
     <p className="type-display border-b rule-border p-[var(--space-page)] text-black/40 sm:border-b-0 sm:border-r">
      Email
      <br />
      GitHub
     </p>
     <div className="type-display p-[var(--space-page)]">
      <a href={`mailto:${siteProfile.email}`}>{siteProfile.email}</a>
      <br />
      <a href={siteProfile.githubUrl} target="_blank" rel="noreferrer">
       {siteProfile.githubLabel}
      </a>
     </div>
    </section>

    <InfoSection title="Availability" last>
     <p>
      Open to full stack developer roles, frontend-focused positions, and portfolio review conversations.
     </p>
    </InfoSection>
   </article>
  </SiteFrame>
 );
}
