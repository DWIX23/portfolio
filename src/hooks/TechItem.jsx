import { useInView } from 'react-intersection-observer';

function TechItem({ icon, title }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 transform transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-4 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800 dark:text-white">{title}</h3>
    </div>
  );
}

export default TechItem;