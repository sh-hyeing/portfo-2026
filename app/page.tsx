"use client";

import { useEffect, useState } from "react";
import ProjectIndexList from "./components/ProjectIndexList";
import SiteFrame from "./components/SiteFrame";

function getTime() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function Home() {
  const [time, setTime] = useState(() => (typeof window === "undefined" ? "" : getTime()));

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getTime()), 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <SiteFrame>
      <header className="type-display grid gap-[var(--space-gap)] border-b rule-border p-[var(--space-page)] sm:grid-cols-[1fr_auto]">
        <h2 className="accent-text">
          Nam vel blandit chroma est
          <br />
          Nunc nislavit
        </h2>
        <p className="accent-text text-right" suppressHydrationWarning>
          {time}
        </p>
      </header>

      <ProjectIndexList />
    </SiteFrame>
  );
}
