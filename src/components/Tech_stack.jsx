import { useInView } from 'react-intersection-observer';
import { FaReact, FaJs, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiPhp, SiPython } from 'react-icons/si';
import TechItem from '../hooks/TechItem';

const tech_stack = [
  { title: "React", icon: <FaReact size={48} className="text-blue-500" /> },
  { title: "JavaScript", icon: <FaJs size={48} className="text-yellow-400" /> },
  { title: "PHP", icon: <SiPhp size={48} className="text-purple-700" /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss size={48} className="text-teal-400" /> },
  { title: "MySQL", icon: <SiMysql size={48} className="text-blue-700" /> },
  { title: "Node.js", icon: <FaNode size={48} className="text-green-600" /> },
  { title: "Python", icon: <SiPython size={48} className="text-yellow-500" /> },
];

function Tech_stack() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="tech_stack" className="container mx-auto py-20 px-6 scroll-mt-20">
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white transition-all duration-700 ease-in-out transform ${
          titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        Languages, Frameworks, and Tools
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tech_stack.map((tech, index) => (
          <TechItem key={index} icon={tech.icon} title={tech.title} />
        ))}
      </div>
    </section>
  );
}

export default Tech_stack;
