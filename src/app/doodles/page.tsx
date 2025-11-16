"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Plus } from "lucide-react";
import Tab from "@/elements/Tab";
import CategoryTag from "@/elements/CategoryTag";
import DoodleCard from "@/components/DoodleCard";

const DoodlePage = () => {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "pen", label: "Pen" },
    { id: "pencil", label: "Pencil" },
    { id: "marker", label: "Marker" },
    { id: "mixed", label: "Mixed media" },
  ];

  const doodles = [
    { id: 1, title: "Mountain Sketch", backgroundColor: "#d4e8d4" },
    { id: 2, title: "Abstract Lines", backgroundColor: "#e8d4d4" },
    { id: 3, title: "Urban Scene", backgroundColor: "#d4d4e8" },
    { id: 4, title: "Nature Study", backgroundColor: "#e8e8d4" },
    { id: 5, title: "Portrait Practice", backgroundColor: "#e8d4e8" },
    { id: 6, title: "Still Life", backgroundColor: "#d4e8e8" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif text-foreground">Doodles</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity">
          <Plus size={18} />
          <span className="text-sm font-medium">New doodle</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b border-border">
        <Tab
          label="Inspiration"
          href="/doodles"
          isActive={pathname === "/doodles"}
        />
        <Tab
          label="Your doodles"
          href="/doodles/my"
          isActive={pathname === "/doodles/my"}
        />
      </div>

      {/* Category Tags */}
      <div className="flex gap-2 mb-8">
        {categories.map((category) => (
          <CategoryTag
            key={category.id}
            label={category.label}
            isActive={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          />
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {doodles.map((doodle) => (
          <DoodleCard
            key={doodle.id}
            title={doodle.title}
            backgroundColor={doodle.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
};

export default DoodlePage;
