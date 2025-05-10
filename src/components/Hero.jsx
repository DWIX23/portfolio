import { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Importing an icon for the button
import { TypeAnimation } from 'react-type-animation'; // Import the typing animation component

function Hero() {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to track modal visibility
  const [showEmoji, setShowEmoji] = useState(false); // State to track when to show the emoji
  const [isTypingComplete, setIsTypingComplete] = useState(false); // State to control cursor
  const [shapes, setShapes] = useState([]);

  const cyanGradients = [
    'bg-cyan-theme-gradient-1',
    'bg-cyan-theme-gradient-2',
    'bg-cyan-theme-gradient-3',
    'bg-cyan-theme-gradient-4',
    'bg-cyan-theme-gradient-5',
  ];

  const waterAnimations = [
    'water-flow-1',
    'water-flow-2',
    'water-flow-3',
    'water-flow-4',
    'water-flow-5',
  ];

  useEffect(() => {
    // Generate random shapes on component mount
    const newShapes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 400 + 200, // Random size between 200 and 600
      top: Math.random() * 100, // Random top position
      left: Math.random() * 100, // Random left position
      animation: waterAnimations[Math.floor(Math.random() * waterAnimations.length)],
      rotation: Math.random() * 360, // Random rotation
      color: cyanGradients[Math.floor(Math.random() * cyanGradients.length)],
      opacity: Math.random() * 0.2 + 0.1, // Random opacity between 0.1 and 0.3
      delay: Math.random() * 5, // Random delay for animation start
    }));
    setShapes(newShapes);
  }, []);

  // Scroll to the projects section when the button is clicked
  const smoothScrollTo = (target, duration = 800, offset = 80) => {
    // ... (keep your existing smoothScrollTo function)
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

  // Function to handle the emoji click
  const handleEmojiClick = () => {
    setIsModalVisible(!isModalVisible); // Toggle the modal visibility on emoji click
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background with cyan gradient and reduced blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-theme-light/20 via-cyan-theme/20 to-cyan-theme-dark/20 backdrop-blur-xs" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`absolute ${shape.color} rounded-full mix-blend-multiply filter blur-lg animate-${shape.animation}`}
            style={{
              top: `${shape.top}%`,
              left: `${shape.left}%`,
              transform: `rotate(${shape.rotation}deg)`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              opacity: shape.opacity,
              animationDelay: `${shape.delay}s`,
            }}
          />
        ))}
        
        {/* Additional geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-theme/30 rounded-full mix-blend-multiply filter blur-xl animate-spin-slow" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-theme-dark/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-theme-light/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
      </div>

      {/* Main content with glassmorphism */}
      <div className="relative z-10 backdrop-blur-sm bg-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl border border-white/20 max-w-4xl mx-4 animate-card-expand">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
          <TypeAnimation
            sequence={[
              300,
              'Hi, Welcome!',
              1500,
              'Hi, ',
              500,
              'Hi, I\'m Darwin James',
              50,
              () => {
                setIsTypingComplete(true);
              },
              500,
              () => {
                setShowEmoji(true);
              }
            ]}
            wrapper="span"
            cursor={!isTypingComplete}
            repeat={0}
            style={{ display: 'inline-block' }}
          />
          {showEmoji && (
            <span
              role="img"
              aria-label="wave"
              className="inline-block origin-[70%_70%] wave-emoji ml-2 animate-wave"
              onClick={handleEmojiClick}
            >
              👋
            </span>
          )}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
          Aspiring Web Developer | React Specialist | Passionate about creating impactful, scalable solutions
        </p>

        <a
          href="#projects"
          onClick={handleScroll('#projects')}
          className="inline-flex items-center space-x-3 px-8 py-4 text-white bg-cyan-theme/20 hover:bg-cyan-theme/30 backdrop-blur-sm transition-all duration-300 rounded-full shadow-lg hover:shadow-xl border border-cyan-theme-light/20"
        >
          <span className="font-medium">View My Work</span>
          <FaArrowDown className="w-5 h-5" />
        </a>
      </div>

      {/* Conditionally render the modal */}
      {/* {isModalVisible && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-sm border border-white/20">
            <h2 className="text-xl font-semibold mb-4 text-white">
              You Found it yehey😁🫶🥰
            </h2>
            <p className="text-white/90">
              I love you Yaniiii💖❤️💖
            </p>
            <button
              onClick={() => setIsModalVisible(false)}
              className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </section>
  );
}

export default Hero;
