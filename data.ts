const portfolio = {
  projects: [{
    projectName: 'Drafted',
    url: 'https://github.com/rfll/mocks',
    techImages: ['techImages/MongoDB.svg', 'techImages/ExpressJS.svg', 'techImages/React.svg', 'techImages/NodeJS.svg'],
    tech: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
    about: 'Drafted provides basketball fans with a comprehensive resource to identify and rank their favorite players leading up to the NBA Draft. Users will have access to a database of hundreds of players, player stats, and scouting videos to assist.',
    image: 'draftedDocs/drafted.png',
    video: "draftedDocs/Drafted App Demo.mp4",
    screenshots: []
  },
  {
    projectName: 'Parrot Perch',
    url: 'https://github.com/rfll/parrot-perch',
    techImages: ['techImages/PostgreSQL.svg', 'techImages/ExpressJS.svg', 'techImages/React.svg', 'techImages/NodeJS.svg'],
    tech: ['PostgreSQL', 'ExpressJS', 'ReactJS', 'NodeJS'],
    about: 'Parrot Perch is a single page application with interactive chat rooms where users can watch Twitch and Youtube streams, and play games.',
    image: 'parrotPerchDocs/parrot-perch.png',
    video: null,
    screenshots: ['parrotPerchDocs/parrotPerchLand.png', 'parrotPerchDocs/parrotPerchWhiteboard.png', 'parrotPerchDocs/parrotPerchYoutube.png', 'parrotPerchDocs/parrot-perch.png']
  },
  {
    projectName: 'Interview Scheduler',
    url: 'https://github.com/rfll/scheduler',
    techImages: ['techImages/React.svg', 'techImages/NodeJS.svg', 'techImages/axios.png'],
    tech: ['ReactJS', 'NodeJS', 'Axios'],
    about: 'Interview Scheduler is a single page application where users can book interviews between Monday to Friday. Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers. Interviews can be edited, deleted and cancelled.',
    image: 'schedulerDocs/scheduler.png',
    video: null,
    screenshots: ['schedulerDocs/bookScheduler.png', 'schedulerDocs/scheduled.png', 'schedulerDocs/deleteScheduler.png', 'schedulerDocs/scheduler.png']
  },
  {
    projectName: 'Wiki-Maps',
    url: 'https://github.com/rfll/wiki-maps',
    techImages: ['techImages/PostgreSQL.svg', 'techImages/ExpressJS.svg', 'techImages/JavaScript.svg', 'techImages/NodeJS.svg'],
    tech: ['PostgreSQL', 'ExpressJS', 'JavaScript', 'NodeJS'],
    about: 'A web app that allows users to create and save maps to display points of interest.',
    image: 'wikiMapsDocs/wiki-maps.png',
    video: null,
    screenshots: ['wikiMapsDocs/wiki-maps.png']
  }],
  bio: 'Full-Stack Web Developer with over 10 years of experience in project management. Looking to combine my passion for programming with skills in problem solving, creative thinking, collaboration, and communication.',
  descriptions: ['Web Developer.', 'Coffee Lover.', 'Basketball Fan.', 'Fun Guy.']
}

export default portfolio;