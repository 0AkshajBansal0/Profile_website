import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";

export const HERO_CONTENT = `I am a passionate Front-End developer with a strong foundation in web technologies and a keen interest in crafting innovative solutions. Proficient in HTML, CSS, JavaScript, React.js, MySQL, MongoDB, Node.js, and Firebase, I aim to expand my expertise to become a Full Stack Developer. Additionally, I am on a journey to become a Data Scientist by learning Python and exploring Artificial Intelligence and Machine Learning. My ultimate goal is to merge these skills to create impactful and user-centric applications that drive both business growth and technological advancement.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Front-End developer with a passion for creating efficient and user-friendly web applications. Currently, I am a student at SRM Institute of Science and Technology. My technical expertise includes HTML, CSS, JavaScript, React.js, MySQL, MongoDB, and Node.js. My journey into web development began with a curiosity for how technology shapes the world, and it has grown into a commitment to continuously learn and tackle new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver impactful and high-quality solutions. Outside of coding, I love binge-watching Netflix, playing badminton for fun, and exploring new technologies. I live by the words of Jeff Bezos: "Work hard, have fun, make history.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2027",
    role: "B.Tech in Computer Science Engineering",
    company: "SRM Institute of Science and Technology, Kattankulathur",
    description: `I am currently pursuing a B.Tech degree at SRMIST. I achieved a 10.00 GPA in my first semester, followed by a 9.90 GPA in the second semester, resulting in an impressive cumulative CGPA of 9.95.`,
    technologies: ["Python", "C++", "Java", "HTML5", "CSS3", "JS", "React.js", "FireBase", "mongoDB", "MySQL"],
  },
  {
    year: "2022 - 2023",
    role: "12th Class",
    company: "V.V. D.A.V. Public School, Delhi",
    description: `Passed with 85.6% in 12th Board Exams`,
    technologies: ["Python", "MySQL"],
  },
  {
    year: "2020 - 2021",
    role: "10th Class",
    company: "V.V. D.A.V. Public School, Delhi",
    description: `Passed with 96.2% in 10th CBSE Exams`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Krishi-Connect",
    image: project1,
    description:
      "A platform connecting farmers and wholesalers, featuring real-time crop listings, fair pricing, weather-based insights, and user authentication.",
    technologies: ["HTML", "CSS", "Express.js", "FireBase"],
  },
  {
    title: "Weather_Cast",
    image: project2,
    description:
      "A dynamic weather app providing real-time weather updates, forecasts, and location-based insights with an intuitive user interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "An engaging personal portfolio website highlighting projects, skills, achievements, and contact details with a modern design and seamless user experience.",
    technologies: ["HTML", "Tailwind-CSS", "React.js",],
  },
];