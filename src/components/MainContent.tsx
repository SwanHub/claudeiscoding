"use client";

import { useNav } from "@/contexts/NavContext";

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isNavOpen } = useNav();

  return (
    <main className={`flex-1 ${isNavOpen ? "ml-72" : "ml-12"}`}>
      {children}
    </main>
  );
}
