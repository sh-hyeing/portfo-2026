import Link from "next/link";
import ProjectIndexList from "../components/ProjectIndexList";
import SiteFrame from "../components/SiteFrame";

export default function ProjectsPage() {
  return (
    <SiteFrame>
      <header className="type-display grid grid-cols-[1fr_auto] gap-[var(--space-gap)] border-b rule-border p-[var(--space-page)]">
        <h1 className="accent-text">Selected Projects</h1>
        <Link href="/" className="accent-text">Index</Link>
      </header>

      <ProjectIndexList />
    </SiteFrame>
  );
}
