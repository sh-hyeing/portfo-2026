import Link from "next/link";
import SiteFrame from "../components/SiteFrame";

const sections = [
 {
  title: "Skills",
  body: [
   "TypeScript",
   "React",
   "Next.js",
   "Tailwind CSS",
   "Node.js",
   "Fiebase",
   "MySQL",
   "SpringBoot",
   "GitHub",
   "AWS EC2",
   "Vercel Deployment",
   "Responsive Interface",
  ],
 },
 {
  title: "Tools",
  body: ["Visual Studio Code", "GitHub", "Vercel"],
 },
 {
  title: "Contact",
  body: ["sh.hyeing@gmail.com", "github.com/sh-hyeing"],
 },
];

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
      Portfolio 2026
     </p>
     <p className="type-display p-[var(--space-page)]">
      I build simple, maintainable web interfaces with a focus on readable structure, responsive layouts, and practical full stack development.
     </p>
    </section>

    {sections.map((section) => (
     <section key={section.title} className="grid border-b rule-border sm:grid-cols-[minmax(10rem,0.45fr)_minmax(0,1fr)]">
      <h2 className="type-body accent-text border-b rule-border p-[var(--space-page)] sm:border-b-0 sm:border-r">{section.title}</h2>
      <div className="type-body p-[var(--space-page)] text-black/75">
       {section.body.map((line, index) => (line ? <p key={`${section.title}-${index}`}>{line}</p> : <br key={`${section.title}-${index}`} />))}
      </div>
     </section>
    ))}

    <footer className="type-caption p-[var(--space-page)] text-black/25">Last Updated 23.04.26</footer>
   </article>
  </SiteFrame>
 );
}
