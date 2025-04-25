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


const projects = [
  {
    title: "Portfolio Website",
    description: "Built with React + Tailwind.",
    images: ["/images/portfolio1.png", "/images/portfolio2.png", "/images/portfolio3.png"]
  },
  {
    title: "Nexus Cloud IT Solutions Website",
    description: "Simple app using useState and localStorage.",
    images: ["/images/todo1.png", "/images/todo2.png", "/images/todo3.png"]
  },
  {
    title: "Online Medical and Dental Info System",
    description: "Designed and developed a web-based system for efficient patient record and inventory management using Tailwind CSS, PHP, MySQL, and AJAX.",
    images: [LoginImg, SignupImg, AdminDImg, AdminEditImg, MedDImg, MedCaseImg, AppImg, AddPImg, PatientHImg, InventoryImg]
  },
  {
    title: "Science Accreditation Website",
    description: "An interactive and user-friendly accreditation platform for the College of Science, enhancing accessibility and information dissemination.",
    images: ["/images/accredit1.png", "/images/accredit2.png", "/images/accredit3.png"],
    link: "",
  },
];

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, 
  });

  return (
    <section id="projects" ref = {ref} className={`container mx-auto py-20 px-4 scroll-mt-24 transform transition-all duration-700 ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;