"use client";

import { useState } from "react";
import { Tool } from "@/data/tools";

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export default function ToolCard({ tool, index }: ToolCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="toolCard" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="toolNumber">#{tool.number}</div>
      <div className="toolBody">
        <div
          className="toolCardHeader"
          onClick={() => setIsOpen(!isOpen)}
          role="button"
          aria-expanded={isOpen}
        >
          <div>
            <p className="toolName">{tool.name}</p>
            <p className="toolText">{tool.description}</p>
          </div>
          <span className={`toolToggle${isOpen ? " toolToggleOpen" : ""}`}>+</span>
        </div>
        <div className={`toolExpand${isOpen ? " toolExpandOpen" : ""}`}>
          <div className="toolExpandInner">
            <span className="toolExpandLabel">Consider</span>
            <p className="toolExpandQuestion">{tool.question}</p>
          </div>
        </div>
      </div>
    </div>
  );
}