import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 
import { SiIndeed } from "react-icons/si";

// --- IMPORTANT ---
// 1. Sign up for a free account at Formspree (https://formspree.io/).
// 2. Create a new form and get your unique endpoint URL.
// 3. Replace 'YOUR_FORM_ID' in the form's action attribute below with your actual Formspree endpoint ID.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblodvop"; // <-- REPLACE THIS

// --- Your Contact Info (Used for direct links below the form) ---
const CONTACT_EMAIL = "darwin.02james@gmail.com"; // Replace with your actual email
const LINKEDIN_URL = "https://linkedin.com/in/yourusername"; // Replace with your LinkedIn profile URL
const GITHUB_URL = "https://github.com/DWIX23"; // Replace with your GitHub profile URL
const INDEED_URL = "https://profile.indeed.com/p/darwinjamese-v4whs51"; // Replace with your Indeed profile URL


function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once when the element comes into view
    threshold: 0.1,    // Trigger when 10% of the element is in the viewport
  });

  // Animation classes (consistent with your other components)
  const animationClasses = `transform transition-all duration-700 ease-out`;
  const animationHidden = `opacity-0 translate-y-10`;
  const animationVisible = `opacity-100 translate-y-0`;

  // Input field base classes for consistent styling
  const inputBaseClasses = "w-full p-3 rounded-md bg-gray-50/80 dark:bg-gray-700/80 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-200 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100";

  return (
    <section
      id="contact"
      ref={ref}
      // Apply animation to the whole section
      className={`container mx-auto py-20 px-4 scroll-mt-24 ${animationClasses} ${
        inView ? animationVisible : animationHidden
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Have a question or want to collaborate? Send me a message using the form below or connect via the links.
        </p>

        {/* Form Container with Glassmorphism (matches About.jsx style) */}
        <div className="bg-white/60 dark:bg-gray-800/70 backdrop-blur-md shadow-lg rounded-xl p-6 sm:p-10 border border-white/20 dark:border-gray-700/50 mb-12">
          <form
            action={FORMSPREE_ENDPOINT} // Point to your Formspree endpoint
            method="POST"
            className="space-y-6 text-left" // Keep form content left-aligned
          >
            {/* Honeypot field for basic spam protection */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name" // Required by Formspree
                  placeholder="Your Name"
                  required
                  className={inputBaseClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email" // Use 'email' or '_replyto' for Formspree reply functionality
                  placeholder="Your Email"
                  required
                  className={inputBaseClasses}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message" // Required by Formspree
                placeholder="Your message..."
                required
                rows="5"
                className={`${inputBaseClasses} h-auto`} // Allow slight resize
              ></textarea>
            </div>
            <div className="text-center sm:text-right"> {/* Align button */}
              <button
                type="submit"
                className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:focus:ring-offset-gray-800 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Direct Contact Links */}
        <div className="flex justify-center items-center space-x-6">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Email me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition duration-200"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href={LINKEDIN_URL}
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition duration-200"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href={INDEED_URL}
            aria-label="Indeed profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition duration-200"
          >
            <SiIndeed size={30} />
          </a>
          <a
            href={GITHUB_URL}
            aria-label="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition duration-200"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
