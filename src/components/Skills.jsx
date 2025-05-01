// c:\xampp\htdocs\dars\my-portfolio\src\components\Skills.jsx

import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaJs, FaNode, FaGitAlt, FaGithub, FaBootstrap
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMysql, SiPhp, SiPython, SiVercel, SiFigma, SiHtml5, SiCss3, SiHostinger, SiCanva, SiNotion, SiPostman, SiObsidian
} from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import { IoLogoNodejs } from 'react-icons/io5';
import TechItem from '../hooks/TechItem'; // Correct path

// --- Adjust Icon Sizes ---
const iconSize = 40; // Define a common size

const techGroups = [
  {
    title: 'Front-end',
    items: [
      { title: 'HTML', icon: <SiHtml5 size={iconSize} className="text-orange-500" /> },
      { title: 'CSS', icon: <SiCss3 size={iconSize} className="text-blue-600" /> },
      { title: 'JavaScript', icon: <FaJs size={iconSize} className="text-yellow-400" /> },
      { title: 'React', icon: <FaReact size={iconSize} className="text-blue-500" /> },
      { title: 'Tailwind CSS', icon: <SiTailwindcss size={iconSize} className="text-teal-400" /> },
      { title: 'Bootstrap', icon: <FaBootstrap size={iconSize} className="text-purple-700" /> },
    ],
  },
  {
    title: 'Back-end',
    items: [
      { title: 'PHP', icon: <SiPhp size={iconSize} className="text-purple-700" /> },
      { title: 'Python', icon: <SiPython size={iconSize} className="text-yellow-500" /> },
      { title: 'Node.js', icon: <IoLogoNodejs size={iconSize} className="text-green-600" /> },
      { title: 'MySQL', icon: <SiMysql size={iconSize} className="text-blue-700" /> },
    ],
  },
  {
    title: 'Tools & Technologies',
    items: [
      { title: 'VS Code', icon: <BiLogoVisualStudio size={iconSize} className="text-blue-500" /> },
      { title: 'Git', icon: <FaGitAlt size={iconSize} className="text-red-500" /> },
      { title: 'GitHub', icon: <FaGithub size={iconSize} className="text-gray-800 dark:text-gray-300" /> }, 
      { title: 'Vercel', icon: <SiVercel size={iconSize} className="text-black dark:text-white" /> },
      { title: 'Postman', icon: <SiPostman size={iconSize} className="text-orange-500" /> },
      { title: 'Hostinger', icon: <SiHostinger size={iconSize} className="text-purple-600" /> },
      { title: 'Notion', icon: <SiNotion size={iconSize} className="text-black dark:text-white" /> },
      { title: 'Obsidian', icon: <SiObsidian size={iconSize} className="text-purple-500" /> },
      { title: 'Figma', icon: <SiFigma size={iconSize} className="text-pink-500" /> },
      { title: 'Canva', icon: <SiCanva size={iconSize} className="text-purple-400" /> },
    ],
  },
];

function Skills() {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const groupInViews = techGroups.map(() => useInView({ triggerOnce: false, threshold: 0.1 }));

  return (
    <section id="skills" className="container mx-auto py-20 px-4 sm:px-6 scroll-mt-20"> {/* Adjusted padding */}
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white transition-all duration-700 ease-in-out transform ${ // Increased margin
          titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        Skills & Technologies
      </h2>

      <div className="space-y-16"> {/* Increased spacing between groups */}
        {techGroups.map((group, index) => {
          const { ref, inView } = groupInViews[index];
          return (
            <div
              key={index}
              ref={ref}
              className={`transition-all duration-700 ease-in-out transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center"> {/* Adjusted dark text */}
                {group.title}
              </h3>
              {/* --- Updated Grid Layout --- */}
              <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center">
                {group.items.map((tech, idx) => (
                  <div
                  key={idx}
                  className="w-full basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 min-w-[160px] flex"
                >
                  <div className="flex flex-col w-full h-full">
                    <TechItem icon={tech.icon} title={tech.title} />
                  </div>
                </div>                
                ))}
              </div>

              {/* --- End of Updated Grid Layout --- */}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
