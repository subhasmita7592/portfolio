import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Subhasmita Sahoo', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my profile', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi my name is',
  name: 'Subhasmita',
  subtitle: "I'm a MERN stack developer ",
  cta: 'know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar2.jpg',
  paragraphOne: 'React JS developer with more than 3yrs of experience. Specialized in web development. Strong organizational, presentational, and communication skills.',
  paragraphTwo: 'Web Technologies: HTML, CSS, JavaScript (ES7), React.js, Redux, Express.js, Node.js, Gatsby, TypescriptTools: Visual Studio Code, Sublime text, GIT, Postman, GitFrameworks: Ant Design, Bootstrap,Material UI, React Bootstrap, Semantic UI.Platforms: Windows, Ubuntu, IOS, AndroidDatabase: MongoDB, PostgreSQL, Firebase.',
  paragraphThree: 'Currently working as Reactjs developer at Infiniti7 November 2018 to present.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'hr.png',
    title: '. Human Resource Management (HRM)',
    info: 'This application is used by organizations. It simplifies the day to day work of a Human Resource Management System. This project enables you to handle the whole organization details like it keeps records of all employee details. This also handles Different Departments of that organization. ',
    info2: 'There is a field called payment where the organization could handle their employees salary details so they can handle job postings. This can handle very part of the organization in one application.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'brain.png',
    title: 'Smart Brain',
    info: 'This is a small single page react application. It uses images to login. If you are a new user, you have to give you an image link.',
    info2: 'Apart from that,I have designed a few different Landing Page and websites using HTML, CSS, and Bootstrap.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'todolist.jpg',
    title: 'TODO App',
    info: 'To Do is a task management app to help you stay organized and manage your day-to-day. You can use this app To Do to make shopping lists or task lists, .',
    info2: '. To Do makes it easy to stay organized and manage your life.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'quiz.png',
    title: 'Quiz App',
    info: 'This application is developed for quiz purpose, allowing the users to play the multiple choice questions. ',
    info2: 'To build this app i have used Trivia API.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'To hire me please contact',
  btn: 'contact',
  email: 'subhasmita7592@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: '',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/subhasmita-sahoo/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/subhasmita7592/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, 
};
