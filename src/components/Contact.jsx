import { useInView } from 'react-intersection-observer';

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once when the element comes into view
    threshold: 0.1,    // Trigger when 10% of the element is in the viewport
  });

    return (
      <section id="contact" ref={ref} className={`container mx-auto py-16 px-4 scroll-mt-20 transform transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className="space-y-4 max-w-lg">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" className="w-full p-3 border rounded h-32"></textarea>
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  export default Contact;
  