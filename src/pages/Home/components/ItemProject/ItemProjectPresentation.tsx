import React from "react";
import { IPropsItemProjectPresentation } from "./ItemProject-types";

import "./styles.css";

const ItemProjectPresentation: React.FC<IPropsItemProjectPresentation> = ({
  project,
  handleRemoveProject,
}) => {
  return (
    <section className="container-item-project">
      <p>{project.title}</p>
      <button onClick={() => handleRemoveProject(project.id)}>Remover</button>
    </section>
  );
};

export default ItemProjectPresentation;
