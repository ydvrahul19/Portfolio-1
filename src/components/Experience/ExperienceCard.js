import React from "react";
import { Card, Badge } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";

function ExperienceCard({ experience }) {
  return (
    <Card className="experience-card">
      <Card.Body>
        <Card.Title as="h3" className="experience-title">
          {experience.title}
        </Card.Title>
        <Card.Subtitle className="mb-2 company-name">
          {experience.company}
        </Card.Subtitle>
        <div className="location-wrapper mb-2">
          <FaMapMarkerAlt className="location-icon" />
          <span className="location-text">{experience.location}</span>
        </div>
        <ul className="experience-description">
          {experience.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="technology-stack">
          {experience.technologies.map((tech, index) => (
            <Badge 
              key={index} 
              bg="#ae9ab6"
              className="tech-badge"
              style={{ 
                margin: "0.2rem",
                backgroundColor: "rgba(205, 95, 248, 0.2) !important",
                color: "#cd5ff8"
              }}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
