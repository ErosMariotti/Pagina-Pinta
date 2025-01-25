// src/components/ProjectCard.jsx
import React from "react";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="project-card">
      <img style={{
              width: "250px",
              height: "auto",
              borderRadius: "10px",
            }} src={imgUrl} alt={title} />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};
