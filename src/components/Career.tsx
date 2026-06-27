import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Undergraduate Student</h4>
                <h5>St. Aloysius University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing a Bachelor's degree in Computer Applications. Focusing on AI-Assisted Engineering, System Architecture, and AI-Augmented Development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Explorer</h4>
                <h5>Freelance / Personal Projects</h5>
              </div>
              <h3>2023–NOW</h3>
            </div>
            <p>
              Engaged in Digital Media, Graphic Design, Content Marketing, and building full-stack applications with C, R, SQL, and Git/GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
