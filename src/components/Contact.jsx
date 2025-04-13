function Contact() {
    return (
      <section id="contact" className="container mx-auto py-16 px-4 scroll-mt-20">
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
  