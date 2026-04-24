import type { ReactNode } from "react";

export default function InfoSection({
 title,
 children,
 last = false,
}: {
 title: string;
 children: ReactNode;
 last?: boolean;
}) {
 return (
  <section className={`grid sm:grid-cols-[minmax(10rem,0.45fr)_minmax(0,1fr)] ${last ? "sm:border-b sm:rule-border" : "border-b rule-border"}`}>
   <h2 className="type-body accent-text border-b rule-border p-[var(--space-page)] sm:border-b-0 sm:border-r">{title}</h2>
   <div className="type-body p-[var(--space-page)] text-black/75">{children}</div>
  </section>
 );
}
