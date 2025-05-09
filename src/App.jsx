import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Organizations from './components/Organizations';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500 delay-200 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Organizations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
