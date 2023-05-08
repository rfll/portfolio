const portfolio = {
  projects: [{
    projectName: 'Drafted',
    url: 'https://github.com/rfll/mocks',
    techImages: ['techImages/MongoDB.svg', 'techImages/ExpressJS.svg', 'techImages/React.svg', 'techImages/NodeJS.svg'],
    tech: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
    about: 'A web app that allows amateur basketball scouts to create a ranking of players entering the NBA.',
    image: 'draftedDocs/drafted.png',
    video: "draftedDocs/Drafted App Demo.mp4",
    screenshots: null
  },
  {
    projectName: 'Parrot Perch',
    url: 'https://github.com/rfll/parrot-perch',
    techImages: ['techImages/PostgreSQL.svg', 'techImages/ExpressJS.svg', 'techImages/React.svg', 'techImages/NodeJS.svg'],
    tech: ['PostgreSQL', 'ExpressJS', 'ReactJS', 'NodeJS'],
    about: 'A web app with interactive chat rooms where users can watch Twitch and Youtube streams, and play games.',
    image: 'parrotPerchDocs/parrot-perch.png',
    video: null,
    screenshots: ['parrotPerchDocs/parrotPerchLand.png', 'parrotPerchDocs/parrotPerchWhiteboard.png', 'parrotPerchDocs/parrotPerchYoutube.png', 'parrotPerchDocs/parrot-perch.png']
  },
  {
    projectName: 'Interview Scheduler',
    url: 'https://github.com/rfll/scheduler',
    techImages: ['techImages/React.svg', 'techImages/NodeJS.svg', 'techImages/axios.png'],
    tech: ['ReactJS', 'NodeJS', 'Axios'],
    about: 'A scheduling app that can create, edit, and delete interview appointments.',
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