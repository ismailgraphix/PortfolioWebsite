import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.png";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.png";
import portfolioImg05 from "../images/portfolio-05.png";
import portfolioImg06 from "../images/portfolio-06.png";
import portfolioImg07 from "../images/portfolio-07.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Full Stack",
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution with user authentication, product management, shopping cart functionality, and secure payment processing. Features include responsive design, real-time inventory tracking, and admin dashboard for business management.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "#",
  },
  {
    id: "02",
    imgUrl: portfolioImg07,
    category: "Full Stack",
    title: "Task Management System",
    description:
      "A collaborative project management platform with real-time updates, team collaboration features, and progress tracking. Includes user authentication, role-based access control, file sharing, and comprehensive reporting dashboard for project oversight.",
    technologies: ["Nextjs", "Tailwind css",  "Postgresql"],
    siteUrl: "#",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Frontend",
    title: "Weather Dashboard",
    description:
      "A modern weather application with real-time data integration, interactive maps, and detailed forecasting. Features include location-based weather updates, 7-day forecasts, weather alerts, and customizable widgets for different weather parameters.",
    technologies: ["Nextjs", "Tailwind css"],
    siteUrl: "#",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Frontend",
    title: "Fitness Tracking App",
    description:
      "A comprehensive fitness application with workout tracking, nutrition monitoring, and progress visualization. Features include personalized workout plans, calorie tracking, progress charts, and social features for community engagement and motivation.",
    technologies: ["Nextjs", "Tailwind css", "Framer motion"],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Full Stack",
    title: "Learning Management System",
    description:
      "A comprehensive educational platform for online learning with course management, student progress tracking, and interactive assessments. Features include video streaming, discussion forums, automated grading, and detailed analytics for both instructors and students.",
    technologies: ["Nextjs", "Tailwind css", "Node.js", "Cloudinary","Postgresql"],
    siteUrl: "#",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Backend",
    title: "API Management System",
    description:
      "A robust backend API system with comprehensive authentication, rate limiting, and data validation. Features include automated testing, monitoring, logging, and documentation generation. Built with scalability and security in mind for enterprise-level applications.",
    technologies: ["Nextjs", "Tailwind css", "Node.js", "Cloudinary","Postgresql"],
    siteUrl: "#",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Full Stack",
    title: "Real-time Chat Application",
    description:
      "A modern messaging platform with real-time communication, file sharing, and group chat capabilities. Features include message encryption, user presence indicators, message history, and cross-platform compatibility for seamless communication across devices.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB", "Cloudinary"],
    siteUrl: "#",
  },
  
 
];

export default portfolios;