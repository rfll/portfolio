import Project from "./project";
import ContactMethods from "./contactMethods";

type Portfolio = {
  projects: Project[];
  bio: string;
  descriptions: string[];
  contactMethods: ContactMethods[];
};

export default Portfolio;