import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once when the element comes into view
    threshold: 0.1,    // Trigger when 10% of the element is in the viewport
  });

  return (
    <section
      id="about"
      ref={ref}
      className={`container mx-auto py-20 px-4 sm:px-8 max-w-4xl scroll-mt-20 transform transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        About Me
      </h2>
      <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
        I'm a junior web developer with a passion for building clean, responsive, and user-friendly digital experiences. Recently, I completed an internship at <span className="font-semibold text-gray-900 dark:text-white">Nexus Cloud IT Solutions</span>, where I contributed to the enhancement of their company website and supported clients with various web development tasks.
      </p>
      <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
        My technical toolkit includes <span className="font-medium text-gray-900 dark:text-white">PHP, JavaScript, MySQL, HTML/CSS</span>, and <span className="font-medium text-gray-900 dark:text-white">Tailwind CSS</span>. I've built interactive forms, dynamic search and filter systems, and handled database operations including generating reports with FPDF.
      </p>
      <p className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
        I'm currently in the final stretch of my Computer Science degree, set to graduate in <span className="font-semibold text-gray-900 dark:text-white">June 2025</span>. I'm eager to bring my academic foundation and hands-on experience into a junior developer role where I can grow, collaborate, and create meaningful digital solutions.
      </p>
    </section>
  );
}

export default About;
