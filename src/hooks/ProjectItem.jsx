import { useInView } from 'react-intersection-observer';

function ProjectItem({ title, description }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow transition duration-700 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default ProjectItem;
