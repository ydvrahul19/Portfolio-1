import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from "react-icons/fa";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Associate Software Development Engineer",
      company: "Oriserve",
      location: "Noida",
      duration: "February 2025 - Present",
      description: [
        "Investigate, debug, and reproduce software issues, providing timely fixes and workarounds to ensure uninterrupted operability of software solutions.",
        "Extensively work with databases, writing optimized SQL queries to retrieve data for debugging and issue resolution.",
        "Contribute to meeting SLAs (Service Level Agreements) and KPIs (Key Performance Indicators) such as responsiveness, resolution time, and software quality, ensuring high customer satisfaction."
      ],
      technologies: ["TypeScript", "CI/CD", "SQL", "Debugging", "NodeJS", "Docker", "REST API", "Microservices", "AWS", "Jest", "Agile", "Git", "GitHub"],
      color: "#cd5ff8"
    },
    {
      title: "Junior Full Stack Developer",
      company: "Sparrowhawk System",
      location: "Remote, Pune, India",
      duration: "July 2023 - January 2025",
      description: [
        "Integrated TRPC and Prisma into a Next.js environment, enhancing database interactions, reducing query times by 40% and improving overall app performance by 25% through creating and modifying Prisma models.",
        "Architected scalable backend applications with Next.js, improving server response times by 30% and increasing system throughput by 20%, implementing performance optimization best practices.",
        "Implemented responsive designs and optimized performance"
      ],
      technologies: ["Next.js", "TypeScript", "React.js", "Rest API", "Prisma", "Docker", "Git", "GitHub"],
      color: "#cd5ff8"
    },
    {
      title: "Engage Mentorship Program",
      company: "Microsoft India",
      location: "Remote",
      duration: "June 2021 - August 2021",
      description: [
        "Implemented Agile methodology and CI/CD principles to ensure seamless project execution and timely deployment, resulting in a 20% reduction in time-to-market.",
        "Integrated advanced features such as screen sharing, video, and audio switching, and chat integration to elevate the user experience and increase user engagement by 30%.",
        "Optimized API calls and database queries, reducing server load by 25% and boosting app performance, which led to a smoother user experience and a 15% increase in daily active users."
      ],
      technologies: ["JavaScript", "React","Node.js", "Socket.io", "Express.js", "MongoDB",  "WebRTC", "MUI", "Firebase", "Git"],
      color: "#cd5ff8"
    },
    // Add more experiences as needed
  ];

  return (
    <section className="experience-section">
      <Container fluid>
        <Particle />
        <Container>
          <h1 className="project-heading">
            Professional <strong className="purple">Experience </strong>
          </h1>
          <p style={{ color: "white", textAlign: "center" }}>
            My professional journey and work experience
          </p>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Col md={12} className="experience-container">
              <VerticalTimeline animate={true} lineColor="rgba(205, 95, 248, 0.2)">
                {experiences.map((experience, index) => (
                  <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: 'transparent',
                      color: '#fff',
                      border: 'none'
                    }}
                    contentArrowStyle={{
                      borderRight: '7px solid rgba(205, 95, 248, 0.2)'
                    }}
                    date={experience.duration}
                    iconStyle={{ background: experience.color, color: '#fff' }}
                    icon={<FaBriefcase />}
                  >
                    <ExperienceCard experience={experience} />
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Experience;
