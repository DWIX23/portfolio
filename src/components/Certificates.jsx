// src/components/Certificates.jsx
import { useInView } from 'react-intersection-observer';
import CertificateItem from '../hooks/CertificateItem'; // Path should be correct
import ccstImg from '../images/cert/ccst.png';
import completionImg from '../images/cert/cert of completion.png';
import cybersecurityImg from '../images/cert/cybersecurity.png';
import dlImg from '../images/cert/deans list cert blur.png';
import ethicalImg from '../images/cert/ethical.png';
import winserverImg from '../images/cert/win server.png';

const certificates = [
  {
    title: "Certificate of Completion (OJT)",
    issuer: "Nexus Cloud IT Solutions Inc.",
    date: "April 3, 2025",
    image: completionImg,
    // link: "", // REMOVED
  },
  {
    title: "Cisco Certified Support Technician",
    issuer: "Nexus Cloud IT Solutions Inc.",
    date: "February 28, 2025",
    image: ccstImg,
    // link: "", // REMOVED
  },
  {
    title: "Cybersecurity Essentials: Defend, Protect & Secure",
    issuer: "Nexus Cloud IT Solutions Inc.",
    date: "February 22, 2025",
    image: cybersecurityImg,
    // link: "", // REMOVED
  },
  {
    title: "Penetration Testing with Ethical Hacking",
    issuer: "Nexus Cloud IT Solutions Inc.",
    date: "February 16, 2025",
    image: ethicalImg,
    // link: "", // REMOVED
  },
  {
    title: "windows Server 2019: System Administration & Automation",
    issuer: "Nexus Cloud IT Solutions Inc.",
    date: "February 14, 2025",
    image: winserverImg,
    // link: "", // REMOVED
  },
  {
    title: "Deans List Certificate",
    issuer: "University of Rizal System-Morong",
    date: "October 14, 2024",
    image: dlImg,
    // link: "", // REMOVED
  },

];

function Certificates() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      id="certificates"
      ref={ref}
      className={`container mx-auto py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24 transform transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Certificates & Achievements
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"> {/* Slightly increased gap */}
        {certificates.map((cert, index) => (
          <CertificateItem
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            image={cert.image}
            // link={cert.link} // REMOVED
          />
        ))}
      </div>
    </section>
  );
}

export default Certificates;

