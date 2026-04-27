"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import { menuLinks, projects, siteProfile } from "../site-data";

export default function SiteFrame({ children }: { children: ReactNode }) {
 const [menuOpen, setMenuOpen] = useState(false);

 return (
  <main className="min-h-screen bg-white px-[var(--space-page)] pt-[var(--space-page)] pb-0 text-black sm:h-screen sm:overflow-hidden sm:p-0">
   <header className="-mx-[var(--space-page)] mb-0 flex items-start justify-between border-b rule-border px-[var(--space-page)] pb-[var(--space-page)] sm:mx-0 sm:hidden sm:px-0">
    <Link href="/" className="type-display accent-text">
     {siteProfile.title}
    </Link>
    <button type="button" className="type-display accent-text" onClick={() => setMenuOpen(true)}>
     Menu
    </button>
   </header>

   <div className="grid gap-0 sm:h-screen sm:block">
    <aside className="hidden sm:fixed sm:left-0 sm:top-0 sm:block sm:h-screen sm:w-[var(--index-width)] sm:overflow-hidden sm:border-r sm:p-[var(--space-page)] rule-border">
     <h1 className="type-display border-b rule-border pb-[var(--space-gap)]">
      <Link href="/" className="accent-text">
       {siteProfile.title}
      </Link>
      <br />
      <span className="text-black/40">{siteProfile.role}</span>
     </h1>

     <nav className="type-display border-b rule-border py-[var(--space-gap)]">
      {menuLinks.map((item, index) => (
       <span key={item.label}>
        {item.external ? (
         <a href={item.href} target="_blank" rel="noreferrer" className="accent-text">
          {item.label}
         </a>
        ) : (
         <Link href={item.href} className="accent-text">
          {item.label}
         </Link>
        )}
        {index < menuLinks.length - 1 ? <br /> : null}
       </span>
      ))}
     </nav>

     <section className="type-display border-b rule-border py-[var(--space-gap)]">
      <h2 className="text-[inherit] leading-[inherit] tracking-[inherit] text-black/40">Selected</h2>
      <ol className="list-decimal pl-[1.1em] accent-text">
       {projects.map((project) => (
        <li key={project.slug}>
         <Link href={`/projects/${project.slug}`} className="accent-text">
          {project.title}
         </Link>
        </li>
       ))}
      </ol>
     </section>

     <footer className="absolute bottom-0 left-[var(--space-page)] right-[var(--space-page)] text-black/40 rule-top">
      <div className="type-caption flex h-[calc(var(--type-caption)*1.25+20px)] items-center">{siteProfile.footer}</div>
     </footer>
    </aside>

    <section className="sm:ml-[var(--index-width)] sm:h-screen sm:overflow-y-auto">
     <div>{children}</div>
     <footer
      className="-mx-[var(--space-page)] bg-white text-black/40 rule-top sm:hidden"
      style={{
       paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
     >
      <div className="type-caption flex h-[calc(var(--type-caption)*1.25+20px)] items-center px-[var(--space-page)]">{siteProfile.footer}</div>
     </footer>
    </section>
   </div>

   {menuOpen ? (
    <div className="fixed inset-0 z-10 overflow-y-auto bg-white/80 p-[var(--space-page)] backdrop-blur-md sm:hidden">
     <div className="-mx-[var(--space-page)] mb-0 flex items-start justify-between border-b rule-border px-[var(--space-page)] pb-[var(--space-page)]">
      <Link href="/" className="type-display accent-text" onClick={() => setMenuOpen(false)}>
       {siteProfile.title}
      </Link>
      <button type="button" className="type-display accent-text" onClick={() => setMenuOpen(false)}>
       Close
      </button>
     </div>

     <div className="type-display">
      <p className="-mx-[var(--space-page)] border-b rule-border px-[var(--space-page)] py-[var(--space-gap)] text-black/40">{siteProfile.role}</p>

      <nav className="-mx-[var(--space-page)] border-b rule-border px-[var(--space-page)] py-[var(--space-gap)]">
       {menuLinks.map((item, index) => (
        <span key={item.label}>
         {item.external ? (
          <a href={item.href} target="_blank" rel="noreferrer" className="accent-text">
           {item.label}
          </a>
         ) : (
          <Link href={item.href} className="accent-text" onClick={() => setMenuOpen(false)}>
           {item.label}
          </Link>
         )}
         {index < menuLinks.length - 1 ? <br /> : null}
        </span>
       ))}
      </nav>

      <section className="-mx-[var(--space-page)] border-b rule-border px-[var(--space-page)] py-[var(--space-gap)]">
       <h2 className="text-[inherit] leading-[inherit] tracking-[inherit] text-black/40">Selected</h2>
       <ol className="list-decimal pl-[1.1em] accent-text">
        {projects.map((project) => (
         <li key={project.slug}>
          <Link href={`/projects/${project.slug}`} className="accent-text" onClick={() => setMenuOpen(false)}>
           {project.title}
          </Link>
         </li>
        ))}
       </ol>
      </section>
     </div>
    </div>
   ) : null}
  </main>
 );
}
