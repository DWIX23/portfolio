import { useInView } from 'react-intersection-observer';
import ProjectItem from '../hooks/ProjectItem';
import LoginImg from '../images/URSM_IS/Login.png';
import SignupImg from '../images/URSM_IS/Sign up.png';
import AdminDImg from '../images/URSM_IS/Admin Dashboard.png';
import AdminEditImg from '../images/URSM_IS/Edit-Delete-Allow-Restrict Account.png';
import MedDImg from '../images/URSM_IS/Med-User Dashboard.png';
import MedCaseImg from '../images/URSM_IS/Medical Cases Reports.png';
import AppImg from '../images/URSM_IS/New Appointment for Existing Patient.png';
import AddPImg from '../images/URSM_IS/Add Patient.png';
import PatientHImg from '../images/URSM_IS/Patient History.png';
import InventoryImg from '../images/URSM_IS/Inventory.png';
import n1Img from '../images/Nexus/n1.png';
import n2Img from '../images/Nexus/n2.png';
import n3Img from '../images/Nexus/n3.png';
import n4Img from '../images/Nexus/n4.png';
import n5Img from '../images/Nexus/n5.png';
import n6Img from '../images/Nexus/n6.png';
import n7Img from '../images/Nexus/n7.png';
import n8Img from '../images/Nexus/n8.png';
import n9Img from '../images/Nexus/n9.png';
import d1Img from '../images/dothis/d1.png';
import d2Img from '../images/dothis/d2.png';
import d3Img from '../images/dothis/d3.png';
import d4Img from '../images/dothis/d4.png';
import c1Img from '../images/COS/c1.png';
import c2Img from '../images/COS/c2.png'; 
import c3Img from '../images/COS/c3.png';
import c4Img from '../images/COS/c4.png';
import c5Img from '../images/COS/c5.png';
import c6Img from '../images/COS/c6.png';
import c7Img from '../images/COS/c7.png';
import c8Img from '../images/COS/c8.png';
import c9Img from '../images/COS/c9.png';
import c10Img from '../images/COS/c10.png';

const projects = [
  {
    title: "Nexus Cloud IT Solutions Website",
    description: "Information and Enrollment Management System for Nexus Cloud IT Solutions for the courses they offer related to IT industry.",
    images: [n1Img, n2Img, n3Img, n4Img, n5Img, n6Img, n7Img, n8Img, n9Img],
    link: {
      viewCode: "",
      liveDemo: "https://nexus-cloud.vercel.app/",
    },
    languages: ["React", "Tailwind CSS", "Node.js", "MySQL", "JavaScript"],
  },
  {
    title: "Online Medical and Dental Info System",
    description: "Designed and developed a web-based system for efficient patient record and inventory management for medical and dental offices of the university campus.",
    images: [LoginImg, SignupImg, AdminDImg, AdminEditImg, MedDImg, MedCaseImg, AppImg, AddPImg, PatientHImg, InventoryImg],
    languages: ["Tailwind CSS", "PHP", "FPDF", "JavaScript", "MySQL", "AJAX"],
    link: {
      viewCode: "",
      liveDemo: "",
    },
  },
  {
    title: "doThis.jor",
    description: "A simple and user-friendly todo list web application that allows users to create, manage, and track their tasks efficiently.",
    images: [d1Img, d2Img, d3Img, d4Img],
    link: {
      viewCode: "https://github.com/DWIX23/doThis.jor.git",
      liveDemo: "",
    },
    languages: ["PHP", "Bootstrap", "MySQL"],
  },
  {
    title: "College of Science Accreditation Website",
    description: "An interactive and user-friendly accreditation platform for the College of Science, enhancing accessibility and information dissemination.",
    images: [c1Img, c2Img, c3Img, c4Img, c5Img, c6Img, c7Img, c8Img, c9Img, c10Img],
    link: {
      viewCode: "https://github.com/DWIX23/Darwin.github.io.git",
      liveDemo: "https://dwix23.github.io/Darwin.github.io/",
    },
    languages: ["HTML", "CSS", "JavaScript",],
  },
];

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={`container mx-auto py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24 transform transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            languages={project.languages}
            link={project.link}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;