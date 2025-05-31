import { FaChartBar, FaShoppingBag, FaLock, FaFileAlt, FaSearch } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

const category = [
  {
    title: "Management",
    jobs: 965,
    icon: <FaChartBar size={24} className="text-blue-500" />,
  },
  {
    title: "Retail & Products",
    jobs: 563,
    icon: <FaShoppingBag size={24} className="text-purple-500" />,
  },
  {
    title: "Security Analyst",
    jobs: 254,
    icon: <FaLock size={24} className="text-red-500" />,
  },
  {
    title: "Content Writer",
    jobs: 142,
    icon: <FaFileAlt size={24} className="text-indigo-500" />,
  },
  {
    title: "Market Research",
    jobs: 532,
    icon: <FaSearch size={24} className="text-green-500" />,
  },
];

const Categories = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center">Browse by category</h2>
      <p className="text-center text-gray-500 mt-2 mb-6">
        Find the job that’s perfect for you. About 800+ new jobs everyday
      </p>

      <div className="relative">
        <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle btn-outline">
          <IoIosArrowBack />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 no-scrollbar px-10"
        >
          {category.map((cat, index) => (
            <div
              key={index}
              className="min-w-[200px] bg-white shadow-md rounded-lg p-4 text-center flex-shrink-0 border"
            >
              <div className="flex justify-center mb-2">{cat.icon}</div>
              <h3 className="font-semibold text-lg">{cat.title}</h3>
              <p className="text-sm text-gray-500">{cat.jobs} Jobs Available</p>
            </div>
          ))}
        </div>

        <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 btn btn-circle btn-outline">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Categories;
