// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";
import { FaJava} from "react-icons/fa6";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiSpringboot } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";






// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "bpgujjari";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="ri:bootstrap-fill" className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
 
  {
    id: 6,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 7,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 8,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 9,
    skill: <FaJava className="display-4" />,
    name: "Java",
  },
  {
    id: 10,
    skill: <BiLogoSpringBoot className="display-4" />,
    name: "Spring",
  },
  {
    id: 11,
       skill: <SiSpringboot className="display-4" />,
    name: "SpringBoot",
  },
  {
    id: 12,
    skill: <AiOutlineConsoleSql className="display-4" />,
    name: "SQL",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =`https://drive.google.com/file/d/17elJ8ymHtgj1GxWSKdmoz-hGcJuvWHOs/view?usp=drive_link`;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

export const socialData=[{"id":"1","title":"Github","icon":<FaSquareGithub  className="display-4" />, "link":"https://github.com/bpgujjari"},{"id":"2","title":"LinkedIn","icon":<FaLinkedin  className="display-4" />,"link":"https://www.linkedin.com/in/bhavaniprasad-gujjari-85277b228/"},{"id":"3","title":"Email","link":"mailto:gujjaribhavaniprasad40@gmail.com?subject=&body=","icon":<SiGmail  className="display-4" />}]



