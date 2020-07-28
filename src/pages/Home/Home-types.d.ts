export interface Iproject {
  id: string;
  title: string;
}

export interface IPropsHomePresentation {
  projects: Iproject[];
  handleRemoveProject: (projectId: string) => void;
  handleAddNewProject: Function;
  newProjectName: string;
  handleChangeNewProjectName: Function;
}
