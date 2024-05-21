import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-section">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p>
              I am a passionate frontend developer with experience in creating dynamic and responsive websites using modern web technologies.
            </p>
          </div>
          <div className="footer-section">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <ul>
              <li>Email: your-email@example.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="text-xl font-bold mb-4">Follow Me</h2>
            <ul className="flex space-x-4">
              <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">GitHub</a></li>
              <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">LinkedIn</a></li>
              <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-4 mt-8">
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
