import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa'; // Importing an icon for the button
import { TypeAnimation } from 'react-type-animation'; // Import the typing animation component

function Hero() {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to track modal visibility
  const [showEmoji, setShowEmoji] = useState(false); // State to track when to show the emoji
  const [isTypingComplete, setIsTypingComplete] = useState(false); // State to control cursor

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
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-custom-gradient-start via-custom-gradient-middle via-custom-gradient-rose via-custom-gradient-red via-custom-gradient-rose via-custom-gradient-end to-custom-gradient-start bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-loop px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
        {/* Typing Animation Component */}
        <TypeAnimation
          sequence={[
            300, // Initial delay before typing starts
            'Hi, Welcome!',
            1500, // Wait after "Welcome!"
            'Hi, ', // Delete "Welcome!"
            500,  // Wait after deleting
            'Hi, I\'m Darwin James',
            50, // Type the final name
            // --- Sequence Change Starts Here ---
            () => {
              setIsTypingComplete(true); // <-- Hide cursor immediately
            },
            300, // <-- Short delay (50ms) to allow cursor state update to process
            () => {
              setShowEmoji(true); // <-- Show emoji AFTER cursor is hidden
            }
            // --- Sequence Change Ends Here ---
          ]}
          wrapper="span"
          // Control cursor visibility using state
          cursor={!isTypingComplete} // Cursor is visible only when isTypingComplete is false
          repeat={0}
          style={{ display: 'inline-block' }}
        />
        {/* Conditionally render the emoji span */}
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

      <p className="text-lg sm:text-xl md:text-2xl text-white opacity-80 mb-8 max-w-2xl">
        Aspiring Back-End Developer | React Specialist | Passionate about creating impactful, scalable solutions
      </p>
      <a
        href="#projects"
        onClick={handleScroll('#projects')}
        className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 transition-all ease-in-out duration-300 shadow-xl transform hover:scale-110 flex items-center justify-center space-x-3 animate-gradient-button ring-4 ring-white ring-opacity-40"
      >
        <span>View My Work</span>
        <FaArrowDown className="w-5 h-5 text-white" />
      </a>

      {/* Conditionally render the modal */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white transition-all duration-700">
              You Found it yehey😁🫶🥰
            </h2>
            <p className="text-gray-900 dark:text-white transition-all duration-700">
              I love you Yaniiii💖❤️💖
            </p>
            <button
              onClick={() => setIsModalVisible(false)}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
