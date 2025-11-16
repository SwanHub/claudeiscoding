"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Tab from "@/elements/Tab";
import CategoryTag from "@/elements/CategoryTag";
import DoodleCard from "@/components/DoodleCard";

const MyDoodlesPage = () => {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "pen", label: "Pen" },
    { id: "pencil", label: "Pencil" },
    { id: "marker", label: "Marker" },
    { id: "mixed", label: "Mixed media" },
  ];

  const myDoodles = [
    { id: 1, title: "My First Sketch", backgroundColor: "#ffd4d4" },
    { id: 2, title: "Practice Session", backgroundColor: "#d4f4ff" },
    { id: 3, title: "Daily Drawing", backgroundColor: "#fff4d4" },
  ];

  return (
    <div>
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
        {myDoodles.map((doodle) => (
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

export default MyDoodlesPage;
