import React from "react";
import { NavLink } from "react-router-dom";
import { ProjectItem } from "./ProjectItem";

import ProjectsData from "../../db/porfolio.json";
const { projects } = ProjectsData;

export const Projects = () => {
  return (
    <section className="featured-section p-3 py-lg-4 px-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-5">
          Featured Projects
        </h2>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectItem key={index} datos={project} />
          ))}
        </div>
        <div className="text-center py-3">
          <NavLink to="/portfolio" className="btn btn-primary">
            <i className="fas fa-arrow-alt-circle-right me-2"></i>View Portfolio
          </NavLink>
        </div>
      </div>
    </section>
  );
};
