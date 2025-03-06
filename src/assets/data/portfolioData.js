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
    category: "Web Design",
    title: "Aikinyi Estate Website",
    description:
      "A modern real estate platform designed to showcase properties, streamline inquiries, and enhance user experience. Built with a responsive design, the website ensures seamless browsing, property listing management, and secure data handling for both buyers and sellers.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://aikinyi-estate.onrender.com/",
  },
  {
    id: "02",
    imgUrl: portfolioImg07,
    category: "Fullstack",
    title: "Box Cars Dealership Website",
    description:
      "A sleek and modern car dealership platform designed to showcase vehicle listings, facilitate customer inquiries, and provide a seamless browsing experience. With a responsive design and efficient data management, users can explore available cars, compare options, and connect with dealers effortlessly.",
    technologies: ["Nextjs", "Tailwind css",  "Postgresql"],
    siteUrl: "https://boxcarsng.vercel.app/",
  },
  {
    id: "03",
    imgUrl: portfolioImg02,
    category: "Web Design",
    title: "HR Polo Club",
    description:
      "An elegant and dynamic website for HR Polo Club, designed to provide members and visitors with seamless access to club events, training programs, and membership details. The platform offers an engaging user experience with a modern interface and smooth navigation.",
    technologies: ["Nextjs", "Tailwind css"],
    siteUrl: "https://hrpoloclub.vercel.app/",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "Organic Farm",
    description:
      "A beautifully crafted website for Organic Farm, promoting sustainable agriculture and fresh organic produce. The platform provides an interactive and visually appealing experience, showcasing farm products, eco-friendly practices, and customer engagement.",
    technologies: ["Nextjs", "Tailwind css", "Framer motion"],
    siteUrl: "https://organic-farm-omega.vercel.app/",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Fullstack",
    title: "Worksphere",
    description:
      "Worksphere is a modern workspace management platform designed to streamline office operations, enhance collaboration, and optimize productivity. Built with a sleek interface, it integrates cloud storage, real-time updates, and secure data management for a seamless user experience.",
    technologies: ["Nextjs", "Tailwind css", "Node.js", "Cloudinary","Postgresql"],
    siteUrl: "https://work-sphere-bice.vercel.app/",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Fullstack",
    title: "Boxcars Admin",
    description:
      "Boxcars Admin is a powerful backend management system for an automobile dealership, designed to handle inventory, customer inquiries, and sales tracking. It provides a seamless interface for administrators to manage vehicle listings, upload images, and monitor transactions efficiently.",
    technologies: ["Nextjs", "Tailwind css", "Node.js", "Cloudinary","Postgresql"],
    siteUrl: "https://automobile-admin-three.vercel.app/",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Web Design",
    title: "Hospital Appointment Booking Website",
    description:
      "A seamless online platform for scheduling hospital appointments, allowing patients to book consultations with doctors, manage their medical history, and receive appointment reminders. The system ensures efficient hospital workflow and enhances patient experience.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB", "Cloudinary"],
    siteUrl: "#",
  },
  
 
];

export default portfolios;