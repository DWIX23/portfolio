import { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Importing an icon for the button
import { TypeAnimation } from 'react-type-animation'; // Import the typing animation component

function Hero() {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to track modal visibility
  const [showEmoji, setShowEmoji] = useState(false); // State to track when to show the emoji
  const [isTypingComplete, setIsTypingComplete] = useState(false); // State to control cursor
  const [shapes, setShapes] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEnd, setIsLowEnd] = useState(false);

  const cyanGradients = [
    'bg-cyan-theme-gradient-1/80',
    'bg-cyan-theme-gradient-2/80',
    'bg-cyan-theme-gradient-3/80',
  ];

  const waterAnimations = [
    'water-flow-1',
    'water-flow-2',
    'water-flow-3',
  ];

  const waterAnimationsMobile = [
    'water-flow-1-mobile',
    'water-flow-2-mobile',
    'water-flow-3-mobile',
  ];

  useEffect(() => {
    // Check if device is mobile and low-end
    const checkDevice = () => {
      const isMobileDevice = window.innerWidth < 768;
      const isLowEndDevice = navigator.hardwareConcurrency <= 4 || 
                           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      setIsMobile(isMobileDevice);
      setIsLowEnd(isLowEndDevice);
    };

    // Initial check
    checkDevice();

    // Add resize listener
    window.addEventListener('resize', checkDevice);

    // Generate random shapes on component mount
    const generateShapes = () => {
      const shapeCount = isLowEnd ? (isMobile ? 3 : 6) : (isMobile ? 6 : 9);
      const newShapes = Array.from({ length: shapeCount }, (_, i) => ({
        id: i,
        size: isMobile 
          ? Math.random() * 250 + 150 // 150-400px for mobile
          : Math.random() * 400 + 250, // 250-650px for desktop
        top: Math.random() * 100,
        left: Math.random() * 100,
        animation: isMobile
          ? waterAnimationsMobile[Math.floor(Math.random() * waterAnimationsMobile.length)]
          : waterAnimations[Math.floor(Math.random() * waterAnimations.length)],
        rotation: Math.random() * 360,
        color: cyanGradients[Math.floor(Math.random() * cyanGradients.length)],
        opacity: isMobile
          ? Math.random() * 0.15 + 0.1 // 0.1-0.25 for mobile
          : Math.random() * 0.2 + 0.15, // 0.15-0.35 for desktop
        delay: Math.random() * 3,
        duration: isLowEnd 
          ? (isMobile ? 20 + Math.random() * 10 : 25 + Math.random() * 15)
          : (isMobile ? 15 + Math.random() * 10 : 20 + Math.random() * 15),
      }));
      setShapes(newShapes);
    };

    generateShapes();

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, [isMobile, isLowEnd]);

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
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-theme-light/30 via-cyan-theme/30 to-cyan-theme-dark/30 backdrop-blur-xs" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className={`absolute ${shape.color} rounded-full mix-blend-multiply filter ${isLowEnd ? 'blur-md' : 'blur-lg'}`}
            style={{
              top: `${shape.top}%`,
              left: `${shape.left}%`,
              transform: `rotate(${shape.rotation}deg)`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              opacity: shape.opacity,
              animationDelay: `${shape.delay}s`,
              animationDuration: `${shape.duration}s`,
              willChange: 'transform',
            }}
          />
        ))}
        
        {/* Additional geometric shapes - adjusted for mobile and low-end devices */}
        {!isLowEnd && (
          <>
            <div 
              className={`absolute top-1/4 left-1/4 ${isMobile ? 'w-48 h-48' : 'w-96 h-96'} bg-cyan-theme/40 rounded-full mix-blend-multiply filter blur-xl animate-spin-slow`}
              style={{ animationDuration: '30s' }}
            />
            <div 
              className={`absolute top-1/3 right-1/4 ${isMobile ? 'w-40 h-40' : 'w-80 h-80'} bg-cyan-theme-dark/40 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow`}
              style={{ animationDuration: '25s' }}
            />
          </>
        )}
      </div>

      {/* Main content with glassmorphism */}
      <div className="relative z-10 backdrop-blur-md bg-white/20 rounded-2xl p-4 sm:p-8 md:p-12 shadow-2xl border border-white/30 max-w-4xl mx-4 animate-card-expand transform -translate-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-wide drop-shadow-lg">
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

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto font-light drop-shadow-md">
          Aspiring Web Developer | React Specialist | Passionate about creating impactful, scalable solutions
        </p>

        <a
          href="#projects"
          onClick={handleScroll('#projects')}
          className="inline-flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 text-white bg-cyan-theme/30 hover:bg-cyan-theme/40 backdrop-blur-sm transition-all duration-300 rounded-full shadow-lg hover:shadow-xl border border-cyan-theme-light/30"
        >
          <span className="font-medium">View My Work</span>
          <FaArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
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
