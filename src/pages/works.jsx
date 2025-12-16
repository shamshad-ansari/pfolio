import React from "react";
import "../styles/pages/work.scss";
import WorkTemplate from "../components/workTemplate";
import workData from "../data/workData.json";

const Work = () => {
  return (
    <div className="page">
      <div className="work-page">
        {/* Updated Title with Highlight Class */}
        <h2>
          <span className="highlight">My Selected</span> Works
        </h2>

        <p>
          These are projects I’ve worked on across web, software, and applied
          engineering.
          <br />
          Each one represents a problem I cared about and a solution I built end
          to end.
        </p>

        <div className="work-container">
          {workData.map((work, index) => (
            <WorkTemplate
              key={index}
              imageSrc={work.imageSrc}
              altText={work.altText}
              title={work.title}
              description={work.description}
              tags={work.tags}
              sourceLink={work.sourceLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
