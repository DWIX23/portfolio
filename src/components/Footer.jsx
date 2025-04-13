import { FaGithub, FaLinkedin, FaBriefcase } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Darwin James C. Espiritu. All rights reserved.</p>
      <div className="mt-4 flex justify-center items-center gap-4 md:grid-cols-3">
        <a
          href="" // replace with your actual URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 flex items-center gap-1"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>
        <a
          href="" // replace with your actual URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 flex items-center gap-1"
        >
          <FaGithub size={20} />
          GitHub
        </a>
        <a
          href="" // replace with your actual URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 flex items-center gap-1"
        >
          <FaBriefcase className="w-5 h-5" />
          Indeed
        </a>
      </div>
    </footer>
  );
}

export default Footer;
