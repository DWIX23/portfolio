import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { useInView } from 'react-intersection-observer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {FaGithub, FaRegSadTear,} from 'react-icons/fa';
import { FiExternalLink } from "react-icons/fi";

function ProjectItem({ title, description, languages, link, images }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const openModal = (img) => {
    setCurrentImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImg('');
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // The modal content rendered into a portal
  const modalContent = (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center px-4">
      <div className="relative flex items-center justify-center">
        <img
          src={currentImg}
          alt="Preview"
          className="max-w-[90vw] max-h-[80vh] w-auto h-auto rounded-lg object-contain animate-fadeIn"
        />
        <button
          onClick={closeModal}
          className="absolute -top-6 -right-6 text-white bg-black bg-opacity-70 rounded-full p-3 text-2xl sm:text-3xl hover:bg-opacity-90 transition"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className={`p-4 bg-white dark:bg-gray-800 rounded-lg shadow transition duration-700 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Carousel */}
      <Carousel
        showThumbs={false}
        infiniteLoop
        showStatus={false}
        className="rounded-lg overflow-hidden mb-4"
      >
        {images.map((img, i) => (
          <div key={i} onClick={() => openModal(img)} className="cursor-pointer flex justify-center">
            <img
              src={img}
              alt={`${title} ${i + 1}`}
              className="object-contain w-full max-h-52 sm:max-h-60 md:max-h-72 lg:max-h-80 h-auto"
            />
          </div>
        ))}
      </Carousel>

      {/* Title & Description */}
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{description}</p>
      
      <div className="flex flex-wrap gap-2 py-4">
        {languages.map((language, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm font-semibold text-blue-500 dark:text-gray-300 bg-blue-200 dark:bg-blue-700 rounded-full">
            {language}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
      {link.viewCode ? (
          <a
            href={link.viewCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
            View Code
          </a>
        ) : (
          <span className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm">
            <FaRegSadTear />
            Sorry, View Code Unavailable
          </span>
        )}

        {link.liveDemo ? (
          <a
            href={link.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-400 transition duration-300"
          >
            <FiExternalLink />
            Live Demo
          </a>
        ) : (
          <span className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm">
            <FaRegSadTear />
            Sorry, Live Demo Unavailable
          </span>
        )}
      </div>


      {/* Render modal in portal */}
      {isModalOpen && createPortal(modalContent, document.body)}
    </div>
  );
}

export default ProjectItem;