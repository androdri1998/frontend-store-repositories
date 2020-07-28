import React from "react";

import ItemProjectPresentation from "./ItemProjectPresentation";
import { IPropsIndex } from "./ItemProject-types";

const HomePage: React.FC<IPropsIndex> = ({ project, handleRemoveProject }) => {
  return (
    <ItemProjectPresentation
      project={project}
      handleRemoveProject={handleRemoveProject}
    />
  );
};

export default HomePage;
