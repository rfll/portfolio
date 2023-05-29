import Project from "./project";
import ContactMethods from "./contactMethods";

type Portfolio = {
  projects: Project[];
  bioTitle: string;
  bio: string;
  descriptions: string[];
  contactMethods: ContactMethods[];
  photo: string[];
};

export default Portfolio;
