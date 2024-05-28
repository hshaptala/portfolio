import { NavLink } from "react-router-dom";
import "./style.css";

const Project = ({ title, description, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img src={img} alt={title} className="project-img" />
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </li>
    </NavLink>
  );
};

export default Project;
