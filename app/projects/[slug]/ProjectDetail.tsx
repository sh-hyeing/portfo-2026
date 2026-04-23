import Link from "next/link";
import SiteFrame from "../../components/SiteFrame";
import ZoomImage from "../../components/ZoomImage";
import type { Project } from "../../site-data";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <SiteFrame>
      <article>
        <header className="type-display grid grid-cols-[1fr_auto] gap-[var(--space-gap)] border-b rule-border p-[var(--space-page)]">
          <h2 className="accent-text">{project.title}</h2>
          <Link href="/" className="accent-text text-right">
            Index
          </Link>
        </header>

        <section className="border-b rule-border p-[var(--space-page)]">
          <h3 className="type-display">
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit Site ↗
            </a>
          </h3>

          <div className="mt-[var(--space-block)] grid grid-cols-2 items-start gap-[var(--space-gap)] sm:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <ZoomImage
              src={project.desktopImage}
              alt={`${project.title} desktop view`}
              width={project.desktopWidth}
              height={project.desktopHeight}
              sizes="(max-width: 640px) 50vw, 28vw"
              frameClassName="image-link block w-full bg-black/[0.06] text-left"
              imageClassName="h-auto w-full"
            />
            <ZoomImage
              src={project.mobileImage}
              alt={`${project.title} mobile view`}
              width={project.mobileWidth}
              height={project.mobileHeight}
              sizes="(max-width: 640px) 50vw, 18vw"
              frameClassName="image-link block w-full bg-black/[0.06] text-left"
              imageClassName="h-auto w-full"
            />
          </div>

          <div className="type-body mt-[var(--space-block)] grid gap-[var(--space-gap)] border-t rule-border pt-[var(--space-gap)] text-black/55 sm:grid-cols-2 sm:leading-[1.15]">
            <div>
              {project.meta.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="text-black">
              {project.detailText.map((paragraph) => (
                <p key={paragraph} className="mb-[var(--space-gap)] last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </article>
    </SiteFrame>
  );
}
