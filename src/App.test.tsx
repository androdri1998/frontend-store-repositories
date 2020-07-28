import React from "react";
import { registerProject, deleteProject } from "./services/httpFunctions";

test("should be able to add new repository", async () => {
  const nameProject = "test new project";
  const response = await registerProject({ name: nameProject });
  expect(response.title).toBe(nameProject);
});

test("should be able to remove repository", async () => {
  const nameProject = "test new project";
  const projectCreated = await registerProject({ name: nameProject });
  const response = await deleteProject(projectCreated.id);
  expect(response.status).toBe(204);
});
