function Footer () {
    return (
        <footer className="bg-gray-800 text-white text-center py-6">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">LinkedIn</a>
            <a href="#" className="text-blue-400 hover:text-blue-600 mx-2">GitHub</a>
          </div>
        </footer>
      );
    };
    
    export default Footer;