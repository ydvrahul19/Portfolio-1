import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { motion } from "framer-motion";
import "./Projects.css";

// Import project images
import DoctorMy from "../../Assets/Projects/DoctorMy.PNG";
import chatify from "../../Assets/Projects/chatify.png";
import EmailSequencer from "../../Assets/Projects/EmailSequencer.PNG";
import InvoiceManager from "../../Assets/Projects/InvoiceManager.PNG";
import teams from "../../Assets/Projects/teams.jpg";
import codeEditor from "../../Assets/Projects/codeEditor.png";
import crud from "../../Assets/Projects/crud.png";
import calculator from "../../Assets/Projects/calculater.jpg";
import travel from "../../Assets/Projects/travel.jpg";

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const projects = [
    {
      title: "DoctorMy - Healthcare Appointment Platform",
      description: "DoctorMy is a doctor appointment booking platform designed to simplify the process of finding and scheduling appointments with healthcare professionals. The platform provides an intuitive and user-friendly interface for patients to manage their medical appointments efficiently.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/ydvrahul19/DoctorMy",
      demo: "https://doctormyin.vercel.app/",
      image: DoctorMy
    },
    {
      title: "Chatify",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      tech: ["React", "Firebase", "Material-UI"],
      github: "",
      demo: "https://chatify-49.web.app/",
      image: chatify
    },
    {
      title: "Email Sequencer",
      description: "Email Sequencer is a MERN Stack web application that allows users to create and manage automated email sequences using a flowchart interface. This application uses React Flow for visualizing the flowchart, Agenda for email scheduling, and Nodemailer for sending emails.",
      tech: ["React", "Node.js", "MongoDB", "Nodemailer"],
      github: "https://github.com/ydvrahul19/Email-Sequencer",
      demo: "https://frontend-h1v6b8mb6-ydvrahul06s-projects.vercel.app/",
      image: EmailSequencer
    },
    {
      title: "Swipe Invoice Manager",
      description: "A modern, intelligent invoice processing system with advanced multi-format data extraction capabilities. Process invoices from PDFs, Excel files, and images with smart data recognition.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/ydvrahul19/Invoice-Manager",
      demo: "https://invoice-manager-87b17.web.app/",
      image: InvoiceManager
    },
    {
      title: "Microsoft-Teams-Clone",
      description: "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/ydvrahul19/ms-teams1/tree/master",
      demo: "https://teams-clone-client.netlify.app/",
      image: teams
    },
    {
      title: "JSON to Form Converter",
      description: "It is a website where you paste the JSON and dynamically a form is generated Build with HTML, CSS and React.JS. Main motive of this project was to build logic around different component and learn react in depth.",
      tech: ["React", "HTML", "CSS"],
      github: "",
      demo: "https://warm-stardust-73e9a1.netlify.app/",
      image: codeEditor
    },
    {
      title: "Crud-App",
      description: "Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/ydvrahul19/CRUD-APP",
      demo: "https://crud-app-reactjjs.netlify.app/",
      image: crud
    },
    {
      title: "React-Calculator-simple",
      description: "Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention.",
      tech: ["React", "HTML", "CSS"],
      github: "https://github.com/ydvrahul19/react-calculator-simple",
      demo: "https://reactjs-calculator-simple-app.netlify.app/",
      image: calculator
    },
    {
      title: "Travel Blog",
      description: "This is a blog website bulid with BootStrap, HTML, CSS, NodejS , MongoDB. It contains experiences of my travel and some tips to make your travel more wonderful. In this site you can update live content into your database. Different route are connected to each other and the request is pulled from the database to display the content.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "",
      demo: "",
      image: travel
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="project-heading"
            variants={itemVariants}
          >
            My Recent <strong className="purple">Works</strong>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="project-subtitle"
          >
            Here are a few projects I've worked on recently
          </motion.p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <ProjectCard
                    imgPath={project.image}
                    title={project.title}
                    description={project.description}
                    techStack={project.tech}
                    ghLink={project.github}
                    demoLink={project.demo}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div 
            className="explore-more"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://github.com/ydvrahul19"
              target="_blank"
              rel="noopener noreferrer"
              className="explore-link"
            >
              More Projects
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Projects;
