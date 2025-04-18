import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Organizations from './components/Organizations';
import Tech_stack from './components/Tech_stack'; 
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-500 delay-200 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Organizations />
      <Skills />
      <Tech_stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
