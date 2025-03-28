import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </motion.div>
      
      <Card.Body>
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Text className="project-description">
          {props.description}
        </Card.Text>
        
        <div className="tech-stack">
          {props.techStack && props.techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="tech-tag"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="project-links">
          {props.ghLink && (
            <motion.a
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub /> GitHub
            </motion.a>
          )}
          
          {props.demoLink && (
            <motion.a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt /> Demo
            </motion.a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
