import React from "react";
import "./styles/TechStack.css";
import { FaDatabase, FaRobot } from "react-icons/fa";

type TechItem = {
  name: string;
  src?: string;
  Icon?: React.ComponentType<{ size?: string | number, color?: string }>;
};

const techIcons: TechItem[] = [
  { name: "C", src: "/images/c.svg" },
  { name: "Claude", Icon: FaRobot },
  { name: "SQL", Icon: FaDatabase },
  { name: "Antigravity", src: "/images/antigravity.png" },
  { name: "GitHub", src: "/images/github.svg" },
  { name: "Vercel", src: "/images/vercel.svg" },
];

const TechStack = () => {
  return (
    <div className="techstack-section" id="techstack">
      <h2>My Tech Stack</h2>
      <div className="techstack-grid">
        {techIcons.map((tech, index) => (
          <div key={index} className="tech-item">
            {tech.Icon ? (
              <div className="tech-icon-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '64px', marginBottom: '1rem' }}>
                <tech.Icon size={48} color="rgba(255, 255, 255, 0.9)" />
              </div>
            ) : (
              <img src={tech.src} alt={tech.name} />
            )}
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
