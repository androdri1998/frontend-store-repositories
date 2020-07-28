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
  console.log(projects);
  return (
    <main className="container-home">
      <header className="header">
        <form onSubmit={(ev) => handleAddNewProject(ev, newProjectName)}>
          <input
            placeholder="Título do novo projeto"
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
      {projects && projects.length > 0 ? (
        projects.map((project) => (
          <ItemProject
            key={project.id}
            project={project}
            handleRemoveProject={handleRemoveProject}
          />
        ))
      ) : (
        <p className="not-found">Projetos não encontrados</p>
      )}
    </main>
  );
};

export default HomePresentation;
