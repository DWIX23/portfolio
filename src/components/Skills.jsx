import { FaReact, FaJs, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiPhp, SiPython } from 'react-icons/si';

const skills = [
  { title: "React", icon: <FaReact size={48} className="text-blue-500" /> },
  { title: "JavaScript", icon: <FaJs size={48} className="text-yellow-400" /> },
  { title: "PHP", icon: <SiPhp size={48} className="text-purple-700" /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss size={48} className="text-teal-400" /> },
  { title: "MySQL", icon: <SiMysql size={48} className="text-blue-700" /> },
  { title: "Node.js", icon: <FaNode size={48} className="text-green-600" /> },
  { title: "Python", icon: <SiPython size={48} className="text-yellow-500" /> },
];

function Skills() {
  return (
    <section id="skills" className="container mx-auto py-16 px-6 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        Languages, Frameworks & Tools
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700"
          >
            <div className="mb-4 transition-transform duration-300 hover:scale-110">
              {skill.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              {skill.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
