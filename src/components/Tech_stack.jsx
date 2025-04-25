import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaJs,
  FaNode,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMysql,
  SiPhp,
  SiPython,
  SiVercel,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiHostinger,
} from 'react-icons/si';
import TechItem from '../hooks/TechItem';
import { BiLogoVisualStudio } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";


const techGroups = [
  {
    title: 'Front-end',
    items: [
      { title: 'HTML', icon: <SiHtml5 size={48} className="text-orange-500" /> },
      { title: 'CSS', icon: <SiCss3 size={48} className="text-blue-600" /> },
      { title: 'JavaScript', icon: <FaJs size={48} className="text-yellow-400" /> },
      { title: 'React', icon: <FaReact size={48} className="text-blue-500" /> },
      { title: 'Tailwind CSS', icon: <SiTailwindcss size={48} className="text-teal-400" /> },
    ],
  },
  {
    title: 'Back-end',
    items: [
      { title: 'PHP', icon: <SiPhp size={48} className="text-purple-700" /> },
      { title: 'Python', icon: <SiPython size={48} className="text-yellow-500" /> },
      { title: 'Node.js', icon: <IoLogoNodejs size={48} className="text-green-600" /> },
      { title: 'MySQL', icon: <SiMysql size={48} className="text-blue-700" /> },
    ],
  },
  {
    title: 'Tools & Technologies',
    items: [
      { title: 'VS Code', icon: <BiLogoVisualStudio size={48} className="text-blue-500" /> },
      { title: 'Git', icon: <FaGitAlt size={48} className="text-red-500" /> },
      { title: 'GitHub', icon: <FaGithub size={48} className="text-gray-800 dark:text-white" /> },
      { title: 'Vercel', icon: <SiVercel size={48} className="text-black dark:text-white" /> },
      { title: 'Hostinger', icon: <SiHostinger size={48} className="text-purple-500" />},
      { title: 'Figma', icon: <SiFigma size={48} className="text-pink-500" /> },
    ],
  },
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
        Skills & Technologies
      </h2>

      <div className="space-y-16">
        {techGroups.map((group, index) => (
          <div key={index}>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
              {group.title}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {group.items.map((tech, idx) => (
                <TechItem key={idx} icon={tech.icon} title={tech.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tech_stack;
