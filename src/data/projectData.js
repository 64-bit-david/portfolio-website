import { SiCss3, SiRedux, SiMongodb, SiMapbox, SiDocker, SiFlask, SiMariadb, SiMicrosoftazure, SiSass } from 'react-icons/si'
import { FaReact, FaHtml5, FaCcStripe, FaSass, FaNodeJs, FaStripe } from 'react-icons/fa';

import writerImg from '../img/writers-desk-min.jpg'
import redditImg from '../img/reddit-news-min.jpg';
import whiskyImg from '../img/whiskymap-min.jpg';
import quizImg from '../img/ex-quiz-it.jpg';
import newsTrendsImg from '../img/nta-min.jpg';


const projectData = [
    {
        title: "News Trends Analyser",
        img: newsTrendsImg,
        imgAlt: 'Snapshot of News Trends Analyser App',
        frontDescription: "Msc Project. Utilising serverless functions, a webscraper collects data from popular news websites which is then analysed and returned to a user.",
        iconData: [
                    {name: 'React', icon: FaReact},
                    {name: 'Flask', icon: SiFlask},
                    {name: 'Docker', icon: SiDocker},
                    {name: 'Azure', icon: SiMicrosoftazure},
                    {name: 'MariaDB', icon: SiMariadb},
                  ],
        backDescription: "A Flask API and MariaDB database allow the user to create an account and save generated results.",
        repoUrl: 'https://github.com/64-bit-david/dissertation-project',
        webLink: '',
        isDeployed: false        
        
    },
    {
        title: "Reddit Newspaper",
        img: redditImg,
        imgAlt: 'Snapshot of Reddit Newspaper site',
        frontDescription: "A single page application that fetches top level posts and comments from the reddit api and presents the data in the style of a front page newspaper providing the user a more immersive reading experience.",
        iconData: [
                    {name: 'React', icon: FaReact},
                    {name: 'Redux', icon: SiRedux},
                    {name: 'Sass', icon: FaSass},
                  ],
        backDescription: "Keeping the content presentable was challenging, as each post can vary in length. This was achieved with a few methods, including adding conditions that dynamically attach css classes that alter size and typography.",
        repoUrl: 'https://github.com/64-bit-david/reddit-newspaper',
        webLink: 'https://64-bit-david.github.io/reddit-newspaper/',
        isDeployed: true        
        
    },
    {
        title: "Writer's Desk",
        img: writerImg,
        imgAlt: "Snapshot of Writer's Desk site",
        frontDescription: " A full stack MERN web app for creative writers to share their work.",
        iconData: [
                    {name: 'React', icon: FaReact},
                    {name: 'Redux', icon: SiRedux},
                    {name: 'SaSS', icon: SiSass},
                    {name: 'NodeJS', icon: FaNodeJs},
                    {name: 'MongoDb', icon: SiMongodb},
                    {name: 'Stripe', icon: FaStripe},

                  ],
        backDescription: "Accurately posting payments / donations data for users was challenging due to the limits of the Stripe API. Using query parameters and a unique payment ID of paid / not I was able to solve the issue.",
        repoUrl: 'https://github.com/64-bit-david/Writer-App',
        webLink: '#',
        isDeployed: false        
        
    },
    {
        title: "Distillery Map",
        img: whiskyImg,
        imgAlt: 'Screenshot of Distillery Map project',
        frontDescription: "An interactive map of Scottish whisky distilleries created with React-Map-GL, a React wrapper for Mapbox. ",
        iconData: [
                    {name: 'React', icon: FaReact},
                    {name: 'CSS', icon: SiCss3},
                    {name: 'Mapbox', icon: SiMapbox},
                  ],
        backDescription: "Figuring out Mapbox was challenging, but it was rewarding to learn and then implement a new technology.",
        repoUrl: 'https://github.com/64-bit-david/whiskymap',
        webLink: 'https://distillery-map.netlify.app',
        isDeployed: true        
        
    },
    {
        title: "Ex-Quiz-it!",
        img: quizImg,
        imgAlt: '',
        frontDescription: "Trivia website with CRUD operations and built in authentication that enables users to create and take quizzes. Uses server side template rendering and built using MVC principles.",
        iconData: [
                    {name: 'HTML', icon: FaHtml5},
                    {name: 'SaSS', icon: SiSass},
                    {name: 'NodeJS', icon: FaNodeJs},
                    {name: 'MongoDb', icon: SiMongodb},
                  ],
        backDescription: "A challenging yet rewarding first project which allowed me to get to to grips with Nodejs, MongoDB and DOM manipulation.",
        repoUrl: 'https://github.com/64-bit-david/ExQuizit',
        webLink: '#',
        isDeployed: false        
    }
]


export default projectData;