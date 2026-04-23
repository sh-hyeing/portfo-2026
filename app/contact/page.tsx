import Link from "next/link";
import SiteFrame from "../components/SiteFrame";

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
      Instagram
      <br />
      GitHub
     </p>
     <div className="type-display p-[var(--space-page)]">
      <a href="mailto:email@example.com">email@example.com</a>
      <br />
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
       instagram.com/username
      </a>
      <br />
      <a href="https://github.com/sh-hyeing" target="_blank" rel="noreferrer">
       github.com/username
      </a>
     </div>
    </section>

    <section className="grid sm:grid-cols-[minmax(10rem,0.45fr)_minmax(0,1fr)]">
     <h2 className="type-body accent-text border-b rule-border p-[var(--space-page)] sm:border-b-0 sm:border-r">Availability</h2>
     <p className="type-body p-[var(--space-page)] text-black/75">
      Open to full stack developer roles, frontend-focused positions, and portfolio review conversations.
     </p>
    </section>
   </article>
  </SiteFrame>
 );
}
