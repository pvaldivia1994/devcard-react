import React from "react";
import { NavLink } from "react-router-dom";

export const ProjectItem = ({datos}) => {
 
  const  {title, desc, client, image, Url} = datos;
  
  return (
    <div className="col-md-6 mb-5">
      <div className="card project-card">
        <div className="row no-gutters">
          <div className="col-12 col-xl-5 card-img-holder">
            <img
              src={image}
              className="card-img"
              alt="image"
            />
          </div>
          <div className="col-12 col-xl-7">
            <div className="card-body">
              <h5 className="card-title">
                <NavLink to={Url} className="theme-link">
                  {title}
                </NavLink>
              </h5>
              <p className="card-text">
                {desc}
              </p>
              <p className="card-text">
                <small className="text-muted">Client: {client}</small>
              </p>
            </div>
          </div>
        </div>
        <div className="link-mask">
          <a className="link-mask-link" href="project.html"></a>
          <div className="link-mask-text">
            <NavLink to={Url} className="btn btn-secondary" href="project.html">
              <i className="fas fa-eye me-2"></i>View Case Study
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
