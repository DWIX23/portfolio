import { useInView } from 'react-intersection-observer';

// Import your images
import ursLogo from '../images/urs.png';
import csLogo from '../images/vector.png';
import bgImg from '../images/bg.jpg'; // Make sure this path is correct

function About() {
  // Intersection observer options
  const observerOptions = {
    triggerOnce: false, // Re-trigger animation on scroll in/out
    threshold: 0.1,     // Trigger when 10% of the element is visible
  };

  // Hook for the H2 Title
  const { ref: refTitle, inView: inViewTitle } = useInView(observerOptions);

  // Hook for the "About Me" card
  const { ref: refAbout, inView: inViewAbout } = useInView(observerOptions);

  // Hook for the "Alma Mater" card
  const { ref: refAlmaMater, inView: inViewAlmaMater } = useInView(observerOptions);

  // --- ADJUSTED CARD STYLES for Mobile & Desktop ---
  // Mobile: Rounded top. Desktop: Rounded left, flat right.
  const standardGlassCardClasses = "bg-white/60 dark:bg-gray-800/70 backdrop-blur-md shadow-lg p-6 sm:p-8 h-full rounded-t-xl md:rounded-l-xl md:rounded-r-none";

  // Mobile: Rounded bottom. Desktop: Rounded right, flat left.
  const almaMaterCardBaseClasses = `relative bg-cover bg-center shadow-lg overflow-hidden h-full rounded-b-xl md:rounded-r-xl md:rounded-l-none`;

  const almaMaterOverlayClasses = "absolute inset-0 bg-black/50 dark:bg-gray-900/50 backdrop-blur-sm";
  const almaMaterContentClasses = "relative z-10 p-6 sm:p-8 h-full flex flex-col";

  // Common animation classes
  const animationClasses = `transform transition-all duration-700 ease-out`;
  const animationHidden = `opacity-0 translate-y-10`;
  const animationVisible = `opacity-100 translate-y-0`;

  return (
    <section
      id="about"
      className="container mx-auto py-20 px-4 sm:px-8 max-w-6xl scroll-mt-24"
    >
      {/* Main Section Title - Now Animated */}
      <h2
        ref={refTitle} // Assign ref for the title
        className={`text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 ${animationClasses} ${
          inViewTitle ? animationVisible : animationHidden // Apply animation based on its own inView state
        }`}
      >
        About Me & My Education
      </h2>

      {/* Grid Container for the two columns */}
      {/* No gap class needed here, grid handles stacking */}
      <div className="grid grid-cols-1 md:grid-cols-5">

        {/* Left Column: About Me (Standard Glass) */}
        <div
          ref={refAbout}
          className={`${standardGlassCardClasses} ${animationClasses} ${
            inViewAbout ? animationVisible : animationHidden
          } md:col-span-3`}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Who I Am
          </h3>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
             <p>
              I'm a junior web developer passionate about building clean, responsive, and user-friendly digital experiences. Recently, I completed an internship at <span className="font-semibold text-gray-900 dark:text-white">Nexus Cloud IT Solutions</span>, where I contributed to enhancing their company website and supported clients with various networking tasks.
            </p>
            <p>
              My technical toolkit includes <span className="font-medium text-gray-900 dark:text-white">PHP, JavaScript, MySQL, HTML/CSS</span>, and <span className="font-medium text-gray-900 dark:text-white">Tailwind CSS</span>. I've built interactive forms, dynamic search/filter systems, and handled database operations, including generating reports with FPDF.
            </p>
            <p>
              I'm eager to bring my academic foundation and hands-on experience into a junior developer role where I can grow, collaborate, and create meaningful digital solutions.
            </p>
          </div>
        </div>

        {/* Right Column: Alma Mater (BG Image + Glass Overlay) */}
        <div
          ref={refAlmaMater}
          className={`${almaMaterCardBaseClasses} ${animationClasses} ${
            inViewAlmaMater ? animationVisible : animationHidden
          } md:col-span-2`}
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          {/* Glass Effect Overlay */}
          <div className={almaMaterOverlayClasses}></div>

          {/* Content Container (above overlay) */}
          <div className={almaMaterContentClasses}>
            <h3 className="text-2xl font-semibold text-white mb-4">
              My Alma Mater
            </h3>

            {/* Logos Container */}
            <div className="flex justify-center items-center gap-6 mb-6">
              <img
                src={ursLogo}
                alt="University of Rizal System Logo"
                className="h-24 sm:h-28 w-auto object-contain filter drop-shadow-md"
              />
              <img
                src={csLogo}
                alt="Computer Science Program Logo"
                className="h-24 sm:h-28 w-auto object-contain filter drop-shadow-md"
              />
            </div>

            {/* Descriptions */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-100">
              <p>
                I am pursuing a <span className="font-semibold text-white">Bachelor of Science in Computer Science</span>, focusing on software development, database management, and web technologies. My expected graduation is <span className="font-semibold text-white">June 2025</span>.
              </p>
              <p>
                My studies are at the <span className="font-semibold text-white">University of Rizal System - Morong Campus</span>, an institution known for its strong programs in technology and engineering, providing a solid theoretical and practical foundation for my career.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
