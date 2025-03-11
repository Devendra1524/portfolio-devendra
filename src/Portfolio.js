import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Devendra from "./Asset/DevendraMain.png"
import { projects } from "./data"

const Portfolio = () => {
    return (
        <div className="bg-dark text-white min-vh-100">
            <section className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
                <img src={Devendra} alt="Profile" className="rounded-circle mb-3" width="150" height="150" />
                <h1 className="display-4 fw-bold">Hi, I'm Devendra Burra</h1>
                <p className="fs-4 text-secondary">Front-End Developer | React.js | React Native| Node.js</p>
                <div className="d-flex gap-3 mt-3">
                    {/* <a href="#" className="fs-3 text-white"><FaGithub /></a> */}
                    {/* <a href="https://www.linkedin.com/in/devendraburra/" target="_blank" className="fs-3 text-white"><FaLinkedin /></a> */}
                    {/* <a href="#" className="fs-3 text-white"><FaEnvelope /></a> */}
                </div>
            </section>

            <section className="py-5 bg-secondary text-center">
                <h2 className="display-5 fw-bold">About Me</h2>
                <p className="mt-3">I am a passionate front-end developer specializing in React.js, React Native, and Node.js, with experience in building interactive,
                    high-performance web and mobile applications.
                    I focus on creating seamless user experiences,
                    leveraging modern frameworks and best practices to develop scalable and efficient solutions.</p>
            </section>

            <section className="py-5 text-center">
                <h2 className="display-5 fw-bold">Projects</h2>
                <p className="mt-3 text-secondary">Below are some of the projects I have worked on. Currently, I do not have live links for them.</p>
                <div className="container mt-4">
                    <div className="row g-4">
                        {projects.map((project, index) => (
                            <div className="col-md-4 d-flex" key={index}>
                                <div className="card bg-secondary text-white p-4 rounded flex-fill d-flex flex-column">
                                    <h3>{project.title}</h3>
                                    <p className="flex-grow-1">{project.details}</p>
                                    <p>
                                        <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-5 bg-secondary text-center">
                <h2 className="display-5 fw-bold">Contact</h2>
                <p className="mt-3">Let's connect! Reach out to me via email, phone, or LinkedIn.</p>
                <div className="d-flex justify-content-center align-items-center gap-4 mt-3">
                    <p className="mb-0 text-white"><strong>Email:</strong> devendraburra@gmail.com</p>
                    <p className="mb-0 text-white"><strong>Phone:</strong> +91-9724884858</p>
                    <a href="https://www.linkedin.com/in/devendraburra/" target="_blank" className="fs-3 text-white">
                        <FaLinkedin />
                    </a>
                </div>

            </section>

        </div>
    );
};

export default Portfolio;
