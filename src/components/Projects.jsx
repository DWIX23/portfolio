const projects = [
    { title: "Portfolio Website", description: "Built with React + Tailwind." },
    { title: "Todo App", description: "Simple app using useState and localStorage." },
    { title: "Online Medical and Dental Information System", description: "Built with Vanilla PHP, MySQL, and Tailwind." },
    { title: "College of Science Accreditation Website", description: "Built with React + Tailwind." },
  ];
  
  function Projects() {
    return (
      <section id="projects" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  export default Projects;
  