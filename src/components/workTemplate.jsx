import React from "react";
const WorkTemplate = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="work-item">
      <div className="image-container">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="description">
        <p>{title}</p>
        <p className="intro">{description}</p>
      </div>
    </div>
  );
};

export default WorkTemplate;
