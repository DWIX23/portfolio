import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import { useInView } from 'react-intersection-observer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ProjectItem({ title, description, images }) {
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
    <div className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <img
          src={currentImg}
          alt="Preview"
          className="max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-lg object-contain"
        />
        <button
          onClick={closeModal}
          className="absolute -top-6 -right-6 text-white bg-black bg-opacity-70 rounded-full p-2 text-3xl hover:bg-opacity-90 transition"
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
              className="object-contain max-h-60 md:max-h-80"
            />
          </div>
        ))}
      </Carousel>

      {/* Title & Description */}
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>

      {/* Render modal in portal */}
      {isModalOpen && createPortal(modalContent, document.body)}
    </div>
  );
}

export default ProjectItem;