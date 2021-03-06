import React, { useState, useEffect, useCallback } from "react";

import HomePresentation from "./HomePresentation";

import { Iproject } from "./Home-types";
import {
  registerProject,
  deleteProject,
  listProjects,
} from "../../services/httpFunctions";

const HomePage: React.FC = () => {
  const [projects, setProjects] = useState<Iproject[]>([]);
  const [newProjectName, setNewProjectName] = useState<string>("");

  const loadProjects = useCallback(async () => {
    const response = await handleListProjects();
    setProjects(response);
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  async function handleAddNewProject(
    ev: React.FormEvent,
    projectName: string
  ): Promise<void> {
    ev.preventDefault();
    const newProject = await registerProject({ name: projectName });
    setProjects([...projects, newProject]);
    setNewProjectName("");
  }

  async function handleRemoveProject(projectId: string): Promise<void> {
    await deleteProject(projectId);
    const auxProjects = projects.filter((project) => project.id !== projectId);
    setProjects([...auxProjects]);
  }

  async function handleListProjects(): Promise<Iproject[]> {
    const response = await listProjects();
    return response.projects;
  }

  function handleChangeNewProjectName(nameProject: string): void {
    setNewProjectName(nameProject);
  }

  return (
    <HomePresentation
      projects={projects}
      handleRemoveProject={handleRemoveProject}
      handleAddNewProject={handleAddNewProject}
      newProjectName={newProjectName}
      handleChangeNewProjectName={handleChangeNewProjectName}
    />
  );
};

export default HomePage;
