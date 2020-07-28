import React from "react";

import ItemProject from "./components/ItemProject";
import { IPropsHomePresentation } from "./Home-types";

import "./styles.css";

const HomePresentation: React.FC<IPropsHomePresentation> = ({
  projects,
  newProjectName,
  handleChangeNewProjectName,
  handleAddNewProject,
  handleRemoveProject,
}) => {
  return (
    <main className="container-home">
      <header className="header">
        <form onSubmit={(ev) => handleAddNewProject(ev, newProjectName)}>
          <input
            placeholder="Titulo do novo projeto"
            type="text"
            onChange={({ target }) => handleChangeNewProjectName(target.value)}
            value={newProjectName}
          />
          <button
            className={newProjectName === "" ? "disabled" : ""}
            type="submit"
            disabled={newProjectName === "" ? true : false}
          >
            Adicionar
          </button>
        </form>
      </header>
      <p className="title">Your projects</p>
      {projects.map((project) => (
        <ItemProject
          key={project.id}
          project={project}
          handleRemoveProject={handleRemoveProject}
        />
      ))}
    </main>
  );
};

export default HomePresentation;
