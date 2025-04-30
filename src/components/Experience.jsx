import { useInView } from 'react-intersection-observer';
import ExperienceItem from '../hooks/ExperienceItem';

// --- Experience Data ---
const experienceData = [
  {
    company: "Nexus Cloud IT Solutions",
    title: "Web Developer and Client support Intern",
    dates: "Feb 2025 - Mar 2025",
    location: "On-site",
    responsibilities: [
      "Enhanced company website functionality using React, Node.js, JavaScript, and MySQL.",
      "Developed interactive Information and Enrollment Management System with dynamic forms.",
      "Managed database operations, including data retrieval and report generation.",
      "Assisted clients with networking tasks and troubleshooting.",
    ],
  },
  {
    company: "Department of Labor and Employment | Municipality of Angono",
    title: "Encoder and document checker at Department of Interior and Local Government Office (SPES)",
    dates: "Apr 2024 - May 2024",
    location: "Onsite",
    responsibilities: [
      "Encoded and verified documents related to Seal of Good Local Governance for Barangay.",
      "Visited and inspected barangay premises and collected documents.",
      "Assisted barangay secretaries with their reports for Seal of Good Local Governance.",
    ],
  },
  {
    company: "Department of Labor and Employment | Municipality of Angono",
    title: "Encoder and Customer Helper at Business Permit and Licensing Office (SPES)",
    dates: "Apr 2023 - May 2023",
    location: "Onsite",
    responsibilities: [
      "Encoded and verified documents related to applying or renewal of business permits of clients.",
      "Assisted clients with business permit applications and renewals process.",
      "Routed clients and documents to the appropriate department for further processing.",
    ],
  },
];

function Experience() {
  // Intersection observer options for the section title
  const observerOptions = {
    triggerOnce: false,
    threshold: 0.1,
  };

  // Hook for the Section Title
  const { ref: refTitle, inView: inViewTitle } = useInView(observerOptions);

  // Common animation classes (only needed for title now)
  const animationClasses = `transform transition-all duration-700 ease-out`;
  const animationHidden = `opacity-0 translate-y-10`;
  const animationVisible = `opacity-100 translate-y-0`;

  return (
    <section
      id="experience"
      className="container mx-auto py-20 px-4 sm:px-8 max-w-4xl scroll-mt-24"
    >
      {/* Section Title */}
      <h2
        ref={refTitle}
        className={`text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16 ${animationClasses} ${
          inViewTitle ? animationVisible : animationHidden
        }`}
      >
        Work Experience
      </h2>

      {/* Experience List Container with Timeline */}
      {/* Removed animation hooks from this container */}
      <div className="relative">
        {/* Vertical Timeline Line - Stays the same */}
        <div className="absolute left-4 top-1 bottom-1 w-0.5 bg-gray-300 dark:bg-gray-600 hidden sm:block" aria-hidden="true"></div>

        {/* Experience Items - Map to the new component */}
        <div className="space-y-16"> {/* Increased spacing between items */}
          {experienceData.map((job, index) => (
            <ExperienceItem key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
