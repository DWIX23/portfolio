// src/hooks/CertificateItem.jsx
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useInView } from 'react-intersection-observer';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

// Removed FiExternalLink and FaRegSadTear as they are no longer needed

function CertificateItem({ title, issuer, date, image }) { // Removed 'link' prop
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Modal content (remains largely the same)
  const modalContent = (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-85 z-[9999] flex items-center justify-center p-4" // Slightly darker overlay
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Spring animation
          >
            <img
              src={image}
              alt={`${title} Certificate Full View`}
              className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg object-contain shadow-2xl" // Added shadow to modal image
            />
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 text-white bg-gray-800 bg-opacity-70 rounded-full p-1.5 text-xl sm:text-2xl hover:bg-opacity-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" // Adjusted close button style
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
      className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-500 ease-in-out transform flex flex-col group hover:shadow-xl hover:scale-[1.03] ${ // Added group, hover effects, border, overflow-hidden
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' // Adjusted animation slightly
      }`}
    >
      {/* Image Area - Takes full width */}
      <div
        onClick={openModal}
        className="cursor-pointer relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-700" // Aspect ratio for consistency, adjust as needed (e.g., 16/9, 4/3, 1/1)
      >
        <img
          src={image}
          alt={`${title} Certificate Preview`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Use object-cover, add hover scale
          loading="lazy"
        />
         {/* Optional: Subtle overlay for text contrast if needed later */}
         {/* <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-opacity duration-300"></div> */}
      </div>

      {/* Certificate Details Area */}
      <div className="p-4 flex-grow flex flex-col justify-between"> {/* Padding added here */}
        <div> {/* Container for top text */}
            <h3 className="text-md sm:text-lg font-semibold mb-1 text-gray-900 dark:text-white leading-tight">
            {title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">
            {issuer}
            </p>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 self-end"> {/* Pushed date to bottom right */}
          {date}
        </p>
      </div>

      {/* Link Section Removed */}

      {/* Modal Portal */}
      {createPortal(modalContent, document.body)}
    </div>
  );
}

export default CertificateItem;
