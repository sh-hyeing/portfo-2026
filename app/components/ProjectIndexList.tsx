import Image from "next/image";
import Link from "next/link";
import { projects } from "../site-data";

export default function ProjectIndexList() {
 return (
  <>
   {projects.map((project, index) => (
    <article key={project.slug} className="grid border-b rule-border sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
     <Link href={`/projects/${project.slug}`} className="image-link block border-b rule-border p-[var(--space-page)] sm:border-b-0 sm:border-r">
      <Image
       src={project.image}
       alt={`${project.title} preview`}
       width={project.imageWidth}
       height={project.imageHeight}
       sizes="(max-width: 640px) 100vw, 28vw"
       quality={100}
       unoptimized
       className="h-auto w-full"
      />
     </Link>
     <div className="grid grid-cols-[4ch_1fr] gap-[var(--space-gap)] p-[var(--space-page)]">
      <p className="type-caption">{String(index + 1).padStart(2, "0")}</p>
      <div>
       <h2 className="type-body">
        <Link href={`/projects/${project.slug}`}>
         {project.title}
        </Link>
       </h2>
       <p className="type-caption mt-1 text-black/40">
        {project.subtitle}
        <br />
        Publisher: {project.publisher}
       </p>
       <p className="type-caption mt-[calc(var(--space-gap)*0.75)] max-w-[32rem] text-black/70">{project.description}</p>
      </div>
     </div>
    </article>
   ))}
  </>
 );
}
