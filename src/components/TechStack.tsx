import "./styles/TechStack.css";

const techIcons = [
  { name: "C", src: "/images/c.svg" },
  { name: "C++", src: "/images/cplusplus.svg" },
  { name: "JavaScript", src: "/images/javascript.webp" },
  { name: "R", src: "/images/r.svg" },
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
            <img src={tech.src} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
