export interface Iproject {
  id: string;
  title: string;
}

export interface IPropsIndex {
  project: Iproject;
  handleRemoveProject: (projectId: string) => void;
}

export interface IPropsItemProjectPresentation {
  project: Iproject;
  handleRemoveProject: (projectId: string) => void;
}
