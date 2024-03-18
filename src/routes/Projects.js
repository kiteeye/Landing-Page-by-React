
import React from 'react';
import "./Projects.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Projects = () => {
 
  const projects = [
    { id: 1, title: "Investigative Reporting", description: "In-depth investigation on corruption in local government." },
    { id: 2, title: "Data Journalism", description: "Analysis of social and economic trends using data visualization." },
    { id: 3, title: "Multimedia Storytelling", description: "Interactive storytelling combining text, images, and videos." },
    { id: 4, title: "Community Journalism", description: "Coverage of local events and issues impacting the community." },
    { id: 5, title: "Feature Writing", description: "Compelling narratives on human interest stories and profiles." },
    { id: 6, title: "Photojournalism", description: "Capturing impactful moments through photography in news reporting." },
    { id: 7, title: "Opinion Columns", description: "Thought-provoking commentary on current affairs and societal issues." },
    { id: 8, title: "Broadcast Journalism", description: "Reporting news through radio and television broadcasts." },
    { id: 9, title: "Documentary Filmmaking", description: "Long-form visual storytelling exploring social and political topics." },
    { id: 10, title: "Ethics in Journalism", description: "Exploration of ethical dilemmas and standards in journalistic practice." }
  ];

  return (
    <div>
    <Navbar />
    <div className="projects-container">
      <h2>Journalism Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <div className="project" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Projects;
