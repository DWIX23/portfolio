import { FaArrowDown } from 'react-icons/fa'; // Importing an icon for the button

function Hero() {
  // Scroll to the projects section when the button is clicked
  const smoothScrollTo = (target, duration = 800, offset = 80) => {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY - offset;
    const distance = end - start;
    const startTime = performance.now();

    const easeInOutQuad = (t) => t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;

    function animateScroll(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, start + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  };

  const handleScroll = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      smoothScrollTo(section);
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-custom-gradient-start via-custom-gradient-middle via-custom-gradient-rose via-custom-gradient-red via-custom-gradient-rose via-custom-gradient-end to-custom-gradient-start bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-loop px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
  Hi, I'm Darwin James{' '}
  <span
    role="img"
    aria-label="wave"
    className="inline-block animate-wave origin-[70%_70%]"
  >
    👋
  </span>
</h1>

      <p className="text-lg sm:text-xl md:text-2xl text-white opacity-80 mb-8 max-w-2xl">
        Back-End Developer | React Specialist | I love You Yani | Passionate about creating impactful, scalable solutions
      </p>
      <a
        href="#projects"
        onClick={handleScroll('#projects')}
        className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 transition-all ease-in-out duration-300 shadow-xl transform hover:scale-110 flex items-center justify-center space-x-3 animate-gradient-button ring-4 ring-white ring-opacity-40"
      >
        <span>View My Work</span>
        <FaArrowDown className="w-5 h-5 text-white" />
      </a>
    </section>
  );
}

export default Hero;
