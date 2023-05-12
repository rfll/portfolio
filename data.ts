import Technologies from "./models/technologies";
import Portfolio from "./models/portfolio";
import ContactMethods from "./models/contactMethods";

const portfolio: Portfolio = {
  projects: [
    {
      projectName: "Drafted",
      url: "https://github.com/rfll/mocks",
      technologies: [
        Technologies.MONGO_DB,
        Technologies.EXPRESS_JS,
        Technologies.REACT_JS,
        Technologies.NODE_JS,
      ],
      about:
        "Drafted provides basketball fans with a comprehensive resource to identify and rank their favorite players leading up to the NBA Draft. Users will have access to a database of hundreds of players, player stats, and scouting videos to assist.",
      image: "draftedDocs/drafted.png",
      video: "draftedDocs/Drafted App Demo.mp4",
      screenshots: [],
    },
    {
      projectName: "Parrot Perch",
      url: "https://github.com/rfll/parrot-perch",
      technologies: [
        Technologies.POSTGRESQL,
        Technologies.EXPRESS_JS,
        Technologies.REACT_JS,
        Technologies.NODE_JS,
      ],
      about:
        "Parrot Perch is a single page application with interactive chat rooms where users can watch Twitch and Youtube streams, and play games.",
      image: "parrotPerchDocs/parrot-perch.png",
      video: null,
      screenshots: [
        "parrotPerchDocs/parrotPerchLand.png",
        "parrotPerchDocs/parrotPerchWhiteboard.png",
        "parrotPerchDocs/parrotPerchYoutube.png",
        "parrotPerchDocs/parrot-perch.png",
      ],
    },
    {
      projectName: "Interview Scheduler",
      url: "https://github.com/rfll/scheduler",
      technologies: [
        Technologies.REACT_JS,
        Technologies.NODE_JS,
        Technologies.AXIOS,
      ],
      about:
        "Interview Scheduler is a single page application where users can book interviews between Monday to Friday. Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers. Interviews can be edited, deleted and cancelled.",
      image: "schedulerDocs/scheduler.png",
      video: null,
      screenshots: [
        "schedulerDocs/bookScheduler.png",
        "schedulerDocs/scheduled.png",
        "schedulerDocs/deleteScheduler.png",
        "schedulerDocs/scheduler.png",
      ],
    },
    {
      projectName: "Wiki-Maps",
      url: "https://github.com/rfll/wiki-maps",
      technologies: [
        Technologies.POSTGRESQL,
        Technologies.EXPRESS_JS,
        Technologies.JAVASCRIPT,
        Technologies.NODE_JS,
      ],
      about:
        "A web app that allows users to create and save maps to display points of interest.",
      image: "wikiMapsDocs/wiki-maps.png",
      video: null,
      screenshots: ["wikiMapsDocs/wiki-maps.png"],
    },
  ],
  bio:
    "Full-Stack Web Developer with over 10 years of experience in project management. Looking to combine my passion for programming with skills in problem solving, creative thinking, collaboration, and communication.",
  descriptions: [
    "Web Developer.",
    "Coffee Lover.",
    "Basketball Fan.",
    "Fun Guy.",
  ],
  contactMethods: [
    ContactMethods.GITHUB,
    ContactMethods.LINKEDIN,
    ContactMethods.EMAIL,
  ],
};

export default portfolio;
