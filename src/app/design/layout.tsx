"use client";

import { DesignNav } from "../../components/DesignNav";

interface DesignLayoutProps {
  children: React.ReactNode;
}

const DesignLayout = ({ children }: DesignLayoutProps) => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto border-black border px-6">
      <header className="h-24 items-end flex">
        <h1 className="text-3xl font-medium text-font-dark font-serif px-4">
          Design
        </h1>
      </header>
      <div className="flex gap-x-12 pb-24 mt-6">
        <DesignNav />
        <section className="w-full flex-col">{children}</section>
      </div>
    </main>
  );
};

export default DesignLayout;
