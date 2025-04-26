import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaGithub, FaRegSadTear } from 'react-icons/fa';
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

  // Modal content rendered via portal
  const modalContent = (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={currentImg}
              alt="Preview"
              className="max-w-auto max-h-auto w-auto h-auto rounded-lg object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute -top-0 -right-0 text-white bg-black bg-opacity-40 rounded-full p-2 text-2xl sm:text-3xl hover:bg-opacity-90 transition"
              aria-label="Close"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div
      ref={ref}
      className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow transition duration-700 ease-in-out transform ${
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
              className="object-contain w-full max-h-52 sm:max-h-60 md:max-h-72 lg:max-h-80 h-auto border-rounded"
            />
          </div>
        ))}
      </Carousel>

      {/* Title & Description */}
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{description}</p>
      
      {/* Languages */}
      <div className="flex flex-wrap gap-2 py-4">
        {languages.map((language, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm font-semibold text-blue-500 dark:text-gray-300 bg-blue-200 dark:bg-blue-700 rounded-full"
          >
            {language}
          </span>
        ))}
      </div>

      {/* Links */}
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

      {/* Modal Portal */}
      {createPortal(modalContent, document.body)}
    </div>
  );
}

export default ProjectItem;
