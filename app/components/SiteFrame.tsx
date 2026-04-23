"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import { projects } from "../site-data";

export default function SiteFrame({ children }: { children: ReactNode }) {
 const [menuOpen, setMenuOpen] = useState(false);

 return (
  <main className="min-h-screen bg-white p-[var(--space-page)] text-black sm:p-0">
   <header className="-mx-[var(--space-page)] mb-0 flex items-start justify-between border-b rule-border px-[var(--space-page)] pb-[var(--space-page)] sm:mx-0 sm:hidden sm:px-0">
    <Link href="/" className="type-display accent-text">
     Portfolio 2026
    </Link>
    <button type="button" className="type-display accent-text" onClick={() => setMenuOpen(true)}>
     Menu
    </button>
   </header>

   <div className="grid gap-0 sm:block">
    <aside className="hidden sm:fixed sm:left-0 sm:top-0 sm:block sm:h-screen sm:w-[var(--index-width)] sm:overflow-hidden sm:border-r sm:p-[var(--space-page)] rule-border">
     <h1 className="type-display border-b rule-border pb-[var(--space-gap)]">
      <Link href="/" className="accent-text">Portfolio 2026</Link>
      <br />
      <span className="text-black/40">Full Stack Developer</span>
     </h1>

     <nav className="type-display border-b rule-border py-[var(--space-gap)]">
      <Link href="/information" className="accent-text">About</Link>
      <br />
      <Link href="/contact" className="accent-text">Email</Link>
      <br />
      <a href="https://github.com/sh-hyeing" target="_blank" rel="noreferrer" className="accent-text">
       Github
      </a>
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

     <footer className="type-display absolute bottom-[var(--space-page)] left-[var(--space-page)] right-[var(--space-page)] pt-[var(--space-gap)] text-black/40 rule-top">
      (c)2037 Portfolio 2026
     </footer>
    </aside>

    <section className="flex min-h-[calc(100dvh-4.25rem)] flex-col sm:ml-[var(--index-width)] sm:block sm:min-h-0">
     {children}
     <footer
      className="-mx-[var(--space-page)] type-caption mt-auto bg-white px-[var(--space-page)] pt-[var(--space-page)] text-black/40 rule-top sm:hidden"
      style={{
       paddingBottom: "calc(var(--space-page) + env(safe-area-inset-bottom, 0px))",
      }}
     >
      (c)2037 Portfolio 2026
     </footer>
    </section>
   </div>

   {menuOpen ? (
    <div className="fixed inset-0 z-10 overflow-y-auto bg-white/80 p-[var(--space-page)] backdrop-blur-md sm:hidden">
     <div className="-mx-[var(--space-page)] mb-0 flex items-start justify-between border-b rule-border px-[var(--space-page)] pb-[var(--space-page)]">
      <Link href="/" className="type-display accent-text" onClick={() => setMenuOpen(false)}>
       Portfolio 2026
      </Link>
      <button type="button" className="type-display accent-text" onClick={() => setMenuOpen(false)}>
       Close
      </button>
     </div>

     <div className="type-display">
      <p className="-mx-[var(--space-page)] border-b rule-border px-[var(--space-page)] py-[var(--space-gap)] text-black/40">Full Stack Developer</p>

      <nav className="-mx-[var(--space-page)] border-b rule-border px-[var(--space-page)] py-[var(--space-gap)]">
       <Link href="/information" className="accent-text" onClick={() => setMenuOpen(false)}>
        About
       </Link>
       <br />
       <Link href="/contact" className="accent-text" onClick={() => setMenuOpen(false)}>
        Email
       </Link>
       <br />
       <a href="https://github.com/sh-hyeing" target="_blank" rel="noreferrer" className="accent-text">
        Github
       </a>
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
