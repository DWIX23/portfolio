function Hero() {
    return (
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center
        bg-gradient-to-r from-custom-gradient-start via-custom-gradient-middle via-custom-gradient-rose via-custom-gradient-red via-custom-gradient-rose via-custom-gradient-end to-custom-gradient-start
        bg-[length:200%_200%] bg-[position:0%_50%]
        animate-gradient-loop text-white"
      >
        <h2 className="text-5xl font-bold mb-4">Hi, I'm Darwin James</h2>
        <p className="text-xl mb-6">Back-End Developer | I love You Yani | React Specialist</p>
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition"
        >
          View My Work
        </a>
      </section>
    );
  }
  
  export default Hero;
  