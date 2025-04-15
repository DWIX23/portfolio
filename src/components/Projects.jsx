import ProjectItem from '../hooks/ProjectItem';

const projects = [
  { title: "Portfolio Website", description: "Built with React + Tailwind." },
  { title: "Todo App", description: "Simple app using useState and localStorage." },
  { title: "Online Medical and Dental Information System", description: "Built with Vanilla PHP, MySQL, and Tailwind." },
  { title: "College of Science Accreditation Website", description: "Built with React + Tailwind." },
];

function Projects() {
  return (
    <section id="projects" className="container mx-auto py-16 px-4 scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectItem key={index} title={project.title} description={project.description} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
