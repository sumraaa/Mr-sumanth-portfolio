import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        {/* Ambient Aurora Glows */}
        <div className="aurora-glow aurora-1"></div>
        <div className="aurora-glow aurora-2"></div>
        <div className="aurora-glow aurora-3"></div>
        
        {/* Digital Dust */}
        <div className="digital-dust"></div>

        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              M R
              <br />
              <span>SUMANTH</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Undergraduate &</h3>
            <div className="landing-h2-wrapper">
              <h2 className="landing-info-h2">
                <div className="landing-h2-1">Developer</div>
                <div className="landing-h2-2">Designer</div>
              </h2>
              <h2>
                <div className="landing-h2-info">Designer</div>
                <div className="landing-h2-info-1">Developer</div>
              </h2>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
