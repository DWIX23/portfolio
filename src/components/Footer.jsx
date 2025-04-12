import { Github, Linkedin, Briefcase } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-6">
      <p>&copy; {new Date().getFullYear()} Darwin James C. Espiritu. All rights reserved.</p>
      <div className="mt-4 flex justify-center items-center gap-4">
        <a
          href="" // replace with your actual URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 flex items-center gap-1"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
        <a
          href="" // replace with your actual URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 flex items-center gap-1"
        >
          <Github size={20} />
          GitHub
        </a>
        <a
          href="" // replace with your actual URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 flex items-center gap-1"
        >
          <Briefcase className="w-5 h-5" />
          Indeed
        </a>
      </div>
    </footer>
  );
}

export default Footer;
