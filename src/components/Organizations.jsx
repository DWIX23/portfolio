import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tipaImg from "../images/tipa.png";
import sagipImg from "../images/sagip.png";
import cossbImg from "../images/cossb.png";
import sroImg from "../images/sro.png"
import dgImg from "../images/dg.jpg"

const orgs = [
  {
    logo: tipaImg,
    title: "Technology Innovators through Programming and Algorithm Sciences (TIPA)",
    position: "4th Year Representative",
    description:
      "Student organization dedicated to fostering innovation and excellence in computer science and programming. TIPA provides a collaborative platform for students to engage in algorithmic problem-solving, coding challenges, and the development of software solutions. Through workshops, hackathons, and collaborative projects, members enhance their technical skills, explore emerging technologies, and contribute to the advancement of computational sciences. TIPA serves as a catalyst for aspiring technologists to transform ideas into impactful digital innovations.",
  },
  {
    logo: sagipImg,
    title: "Student Advocates for Genial Initiatives in Protection of Animals (SAGIP)",
    position: "Animal Monitoring and Feeding Committee",
    description:
      "Student-led organization at the University of Rizal System-Morong (URSM) dedicated to promoting animal welfare and responsible pet ownership within the campus and the broader community. SAGIP focuses on initiatives such as ensuring the well-being and identification of campus animals, making them safer and more recognized members of the community. Through educational campaigns, community outreach, and collaborative projects, SAGIP fosters compassion and awareness, encouraging students to take an active role in protecting and advocating for animals.​",
  },
  {
    logo: dgImg,
    title: "Digital Giants Esports (DG)",
    position: "Member",
    description:
      "The official esports organization of the University of Rizal System, bringing together students who share a passion for competitive gaming, digital media, and online community building. The organization promotes teamwork, strategic thinking, and sportsmanship through organized tournaments, scrimmages, campus-wide and university-wide gaming events. Digital Giants Esports also serves as a platform for student gamers to showcase their skills, connect with fellow enthusiasts, and represent the school in local and national esports competitions.",
  },
  {
    logo: cossbImg,
    title: "College of Science Student Body (COSSB)",
    position: "Member",
    description:
      "Dynamic and service-oriented group that represents the collective interests of students within the College of Science. It serves as a bridge between the student body and the college administration, organizing academic, social, and outreach activities to enrich student life. The organization promotes leadership, unity, and academic excellence while ensuring that student voices are heard and their concerns addressed through various initiatives and events.",
  },
  {
    logo: sroImg,
    title: "Student Resercher's Organization (SRO)",
    position: "Member",
    description:
      "Dedicated academic group that fosters a culture of inquiry, innovation, and critical thinking among students. It supports aspiring researchers across disciplines by providing opportunities for training, collaboration, and presentation of research work. The organization aims to cultivate research skills, promote ethical research practices, and encourage student-led projects that contribute to academic growth and community development.",
  },
];

function Organization() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const settings = {
    centerMode: true,
    centerPadding: "180px", // smaller on mobile
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1024, // For larger screens
        settings: {
          centerPadding: "100px", // Make space for background cards to show
          slidesToShow: 3, // Show 3 cards on desktop, so the background is visible
        },
      },
    ],
    appendDots: (dots) => (
      <div className="custom-dots">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: () => <div className="dot-pill"></div>,
  };

  return (
    <section
      id="organization"
      ref={ref}
      className={`min-h-screen mx-auto flex flex-col items-center px-4 py-20 scroll-mt-48 transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold py-20 text-center text-gray-900 dark:text-white">
        My School Organizations
      </h2>

      <div className="w-full pb-10 max-w-6xl">
      <Slider ref={sliderRef} {...settings}>
          {orgs.map((org, index) => (
            <div key={index} className="px-2">
              <div className="org-card p-8 rounded-2xl text-center transition-all duration-500 ease-in-out dark:bg-gray-800 shadow-md dark:shadow-lg flex flex-col justify-between h-[560px] max-h-[560px]">
                <img
                  src={org.logo}
                  alt={org.title}
                  className="w-36 h-36 object-contain mx-auto mb-6 rounded-full"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {org.title}
                </h3>
                <p className="text-sm text-teal-600 dark:text-teal-400 mb-4 font-medium">
                  {org.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto overflow-y-auto">
                  {org.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Organization;
