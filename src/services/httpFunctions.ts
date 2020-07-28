import api from "./api";
import { IParamsNewProject } from "./httpFunctions-types";

export const registerProject = async (newProject: IParamsNewProject) => {
  const response = await api.post("/projects", newProject);
  return response.data;
};

export const listProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

export const deleteProject = async (projectId: string) => {
  const response = await api.delete(`/projects/${projectId}`);
  return response;
};
