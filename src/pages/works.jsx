import React, { useEffect, useState } from "react";
import "../styles/pages/work.scss";
import WorkTemplate from "../components/workTemplate";

const Work = () => {
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    fetch("/assets/workData.json")
      .then((response) => response.json())
      .then((data) => setWorkData(data))
      .catch((error) => console.error("Error fetching work data:", error));
  }, []);

  return (
    <div className="page">
      <div className="work-page">
        <h2>Work - CodeCraft 'Build'</h2>
        <p>
          CodeCraft - Build: The intersection of innovative problem-solving,
          <br /> optimizing efficiency, and ensuring scalability.
        </p>
        <div className="work-container">
          {workData.map((work, index) => (
            <WorkTemplate
              key={index}
              imageSrc={work.imageSrc}
              altText={work.altText}
              title={work.title}
              description={work.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
