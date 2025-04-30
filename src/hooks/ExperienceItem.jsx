import { useInView } from 'react-intersection-observer';

function ExperienceItem({ job }) {
  // Intersection observer options for each item
  const observerOptions = {
    triggerOnce: false, // Keep animation triggering
    threshold: 0.15,    // Trigger when 15% of the item is visible
  };

  const { ref, inView } = useInView(observerOptions);

  // Common animation classes
  const animationClasses = `transform transition-all duration-700 ease-out`;
  const animationHidden = `opacity-0 translate-y-8`; // Slightly different animation
  const animationVisible = `opacity-100 translate-y-0`;

  return (
    <div
      ref={ref}
      // Apply animation classes to the item container
      className={`relative pl-10 sm:pl-12 ${animationClasses} ${
        inView ? animationVisible : animationHidden
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8">
        {/* Dot with Ring - Ring color matches main background for "punch-out" effect */}
        <div className="absolute w-3.5 h-3.5 bg-teal-500 dark:bg-teal-400 rounded-full ring-4 ring-gray-100 dark:ring-gray-900 transition-colors duration-500 delay-200"></div>
      </div>

      {/* Content Container with subtle left border */}
      <div className="pb-8 border-l-4 border-transparent hover:border-teal-500/30 dark:hover:border-teal-400/30 transition-colors duration-300 pl-6"> {/* Added padding left and hover border */}
        {/* Job Details */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-0"> {/* Slightly larger title */}
            {job.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {job.dates}
          </p>
        </div>
        <p className="text-md font-medium text-gray-700 dark:text-gray-300 mb-1">
          {job.company}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {job.location}
        </p>

        <ul className="list-disc list-outside space-y-2 pl-5 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {job.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceItem;
