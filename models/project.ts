import Technologies from "./technologies";

type Project = {
  projectName: string;
  url: string;
  technologies: Technologies[];
  about: string;
  image: string;
  video: string | null;
  screenshots: string[];
};

export default Project;
