import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/crud.png";
import emotion from "../../Assets/Projects/travel.jpg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/calculater.jpg";
import bitsOfCode from "../../Assets/Projects/teams.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DoctorMy}
              isBlog={false}
              title="DoctorMy - Healthcare Appointment Platform"
              description="DoctorMy is a doctor appointment booking platform designed to simplify the process of finding and scheduling appointments with healthcare professionals. The platform provides an intuitive and user-friendly interface for patients to manage their medical appointments efficiently."
              ghLink="https://github.com/ydvrahul19/DoctorMy"
              demoLink="https://doctormyin.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink=""
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Microsoft-Teams-Clone"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from 
              makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/ydvrahul19/ms-teams1/tree/master"
              demoLink="https://teams-clone-client.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="JSON to Form Converter"
              description="It is a website where you paste the JSON and dynamically a form is generated Build with HTML, CSS and React.JS. Main motive of this project was to build logic around different component and learn react in depth."
              // ghLink="https://github.com/ydvrahul19/Editor.io"
              demoLink="https://warm-stardust-73e9a1.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Crud-App"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/ydvrahul19/CRUD-APP"
              demoLink="https://crud-app-reactjjs.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="React-Calculator-simple"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/ydvrahul19/react-calculator-simple"
              demoLink="https://reactjs-calculator-simple-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Travel Blog"
              description="This is a blog website bulid with BootStrap, HTML, CSS, NodejS , MongoDB. It contains experiences of my travel and some tips to make your travel more
              wonderful. In this site you can update live content into your database. Different route are connected to each other and the request is pulled from
              the database to display the content."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
