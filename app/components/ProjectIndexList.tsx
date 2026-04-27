"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { projects } from "../site-data";

export default function ProjectIndexList() {
 const [activeSlug, setActiveSlug] = useState<string | null>(null);
 const rootRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const handlePointerDown = (event: PointerEvent) => {
   if (!rootRef.current?.contains(event.target as Node)) {
    setActiveSlug(null);
   }
  };

  document.addEventListener("pointerdown", handlePointerDown);

  return () => document.removeEventListener("pointerdown", handlePointerDown);
 }, []);

 const handleImageTap = (event: ReactPointerEvent<HTMLAnchorElement>, slug: string) => {
  if (event.pointerType !== "touch") {
   return;
  }

  if (activeSlug !== slug) {
   event.preventDefault();
   setActiveSlug(slug);
  }
 };

 return (
  <div ref={rootRef}>
   {projects.map((project, index) => (
    <article
     key={project.slug}
     className={`grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] ${index === projects.length - 1 ? "sm:border-b sm:rule-border" : "border-b rule-border"}`}
    >
     <Link
      href={`/projects/${project.slug}`}
      className={`image-link project-index-link block border-b rule-border p-[var(--space-page)] sm:border-b-0 sm:border-r ${activeSlug === project.slug ? "is-touch-active" : ""}`}
      onPointerDown={(event) => handleImageTap(event, project.slug)}
     >
      <Image
       src={project.image}
       alt={`${project.title} preview`}
       width={project.imageWidth}
       height={project.imageHeight}
       sizes="(max-width: 640px) 100vw, 28vw"
       quality={100}
       unoptimized
       className="project-index-image h-auto w-full"
      />
     </Link>
     <div className="grid grid-cols-[4ch_1fr] gap-[calc(var(--space-gap)*1.1)] px-[var(--space-page)] py-[calc(var(--space-page)*1.15)] sm:gap-[var(--space-gap)] sm:p-[var(--space-page)]">
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
       <p className="type-caption mt-[calc(var(--space-gap)*1.25)] max-w-[32rem] break-keep text-black/70 sm:mt-[calc(var(--space-gap)*0.75)]">{project.description}</p>
      </div>
     </div>
    </article>
   ))}
  </div>
 );
}
