// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import './Home.css'

// // Import images for the image slider
// import image1 from "../../assets/ima.png";
// import image2 from "../../assets/sc2.png";
// import image3 from "../../assets/sc1.png";

// // Import images for the gallery
// import ac1 from "../../assets/ac1.png";
// import ac2 from "../../assets/ac2.png";
// import ac3 from "../../assets/ac3.png";
// import Footer from "./footer/Footer";

// const images = [image1, image2, image3];


// function Home() {

//     const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleGalleryItems, setVisibleGalleryItems] = useState([]);

//   // Slider functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const handleScroll = () => {
//     const galleryItems = document.querySelectorAll('.gallery-item');

//     galleryItems.forEach((item, index) => {
//       if (isElementInView(item)) {
//         setVisibleGalleryItems(prev => [...prev, index]);
//       }
//     });
//   };

//   const isElementInView = (el) => {
//     const rect = el.getBoundingClientRect();
//     return rect.top >= 0 && rect.top <= window.innerHeight;
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, );



//   return (
//     <div className="homepage">
//       {/* Main Content */}
//       <main className="main-content mt-16 text-center px-5 py-10 bg-gray-100">
//         {/* Welcome Section */}
//         <section className="welcome-section ">
//           <h2 className="text-2xl font-bold text-blue-900">Welcome to KodeBloom</h2>
//           <p className="my-4 text-gray-700">
//             Manage your school activities efficiently with our easy-to-use platform.
//           </p>
//           <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Learn More
//           </button>
//         </section>

//         <div className="main-container flex justify-between items-start gap-5 mt-10">
//           {/* Image Slider */}
//           <div className="image-slider flex-1 max-w-2xl relative overflow-hidden rounded-lg shadow-md h-72">
//             <div
//               className="slides flex transition-transform duration-500"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {images.map((src, index) => (
//                 <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
//               ))}
//             </div>
//             <div className="slider-dots text-center mt-2">
//               {images.map((_, index) => (
//                 <span
//                   key={index}
//                   className={`inline-block w-2.5 h-2.5 mx-1 bg-gray-300 rounded-full cursor-pointer ${
//                     index === currentIndex ? "bg-blue-900" : ""
//                   }`}
//                   onClick={() => setCurrentIndex(index)}
//                 ></span>
//               ))}
//             </div>
//           </div>

//           {/* Announcement Section */}
//           <div className="announcement-section flex-none w-1/3 bg-blue-900 text-white rounded-lg p-5 h-72">
//             <h3 className="text-xl font-semibold pb-4">Announcements</h3>
//             <div className="announcement-box overflow-hidden h-56 ">
//               <ul className="announcement-list space-y-3 animate-scroll">
//                 <li>
//                   <Link to="/admissions" className="hover:text-blue-300">
//                     Admissions open for 2024!
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/events" className="hover:text-blue-300">
//                     Parent-teacher meeting on Dec 5, 2024
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/annual-day" className="hover:text-blue-300">
//                     Annual Day celebration: Dec 20, 2024
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/holidays" className="hover:text-blue-300">
//                     Upcoming Holidays
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/exam-schedule" className="hover:text-blue-300">
//                     Examination Schedule Released
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Running News Section */}
//         <section className="news-section bg-blue-900 text-white border-t border-gray-200 py-2 relative overflow-hidden">
//           <div className="news-container whitespace-nowrap absolute w-full animate-scroll-text">
//             <p className="news-text inline-block font-semibold ">
//               Important News: Admissions are open for 2024! | Parent-teacher meeting scheduled for December 5th, 2024. |
//               School's Annual Day celebration on December 20th, 2024.
//             </p>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section className="services text-center">
//           <h2 className="text-2xl font-bold mb-6">Our Services</h2>
//           <div className="service-boxes flex mx-[5%] justify-center gap-5">
//             <div className="service-box flex-1 bg-gray-200 border border-gray-300 px-4 py-6 h-44">
//               Service 1
//             </div>
//             <div className="service-box flex-1 bg-gray-200 border border-gray-300 px-4 py-6 h-44">
//               Service 2
//             </div>
//             <div className="service-box flex-1 bg-gray-200 border border-gray-300 px-4 py-6 h-44">
//               Service 3
//             </div>
//           </div>
//         </section>

//         {/* Gallery Section */}
//         <section className="gallery-section mt-10 text-center">
//           <h2 className="text-2xl font-bold mb-6">Our Gallery</h2>
//           <div className="gallery-container flex flex-wrap justify-center gap-5">
//             {[ac1, ac2, ac3].map((src, index) => (
//               <div
//                 key={index}
//                 className={`gallery-item w-1/4 opacity-0 transform scale-90 transition duration-300 ${
//                   visibleGalleryItems.includes(index) ? "opacity-100 scale-100" : ""
//                 }`}
//               >
//                 <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-64 rounded-lg shadow-md cursor-pointer hover:scale-110 duration-300 ease-linear " />
//               </div>
//             ))}
//           </div>
//         </section>

//         <Link to="/enquiry">
//           <button className="fixed bottom-5 right-5 bg-yellow-300 text-purple-900 font-bold px-5 py-2 rounded hover:bg-yellow-400">
//             Enquire Now
//           </button>
//         </Link>
//       </main>

//     {/* Footer component */}
//       <Footer />
    
//     </div>
//   );
// }

import React from 'react';
import Footer from './footer/Footer';
import photo1 from "../../assets/Home/class.jpg";
import photo2 from "../../assets/Home/school-annual-day.webp";
import photo3 from "../../assets/Home/sports.jpg";
import photo4 from "../../assets/Home/teaching.jpg";
import photo5 from "../../assets/Home/pexels-katerina-holmes-5905868.jpg";
import { RiTestTubeLine } from "react-icons/ri";
import { MdSportsBasketball } from "react-icons/md";
import { LuMonitorSmartphone } from "react-icons/lu";
import { IoLibraryOutline } from "react-icons/io5";
import { LiaCampgroundSolid } from "react-icons/lia";
import { FaBusAlt } from "react-icons/fa";

const Home = () => {
  const features = [
    {
      icon: <RiTestTubeLine className="h-8 w-8 text-blue-500" />,
      title: 'Lab',
      description: 'Well-equipped laboratories for hands-on learning.'
    },
    {
      icon: <MdSportsBasketball className="h-8 w-8 text-blue-500" />,
      title: 'Sports',
      description: 'Diverse sports facilities and programs.'
    },
    {
      icon: <LuMonitorSmartphone className="h-8 w-8 text-blue-500" />,
      title: 'Smart Classs',
      description: 'Technology-enabled classrooms for interactive learning.'
    },
    {
      icon: <IoLibraryOutline className="h-8 w-8 text-blue-500" />,
      title: 'Library',
      description: 'Well-stocked library for research and study.'
    },
    {
      icon: <LiaCampgroundSolid className="h-8 w-8 text-blue-500" />,
      title: 'Clean Campus',
      description: 'Well-maintained and clean campus environment.'
    },
    {
      icon: <FaBusAlt className="h-8 w-8 text-blue-500" />,
      title: 'Transport',
      description: 'Convenient transportation options for students.'
    }
  ];

  return (
    <div>
      {/* First Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Let's learn about new knowledge and abilities.
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Let's discover new knowledge and new friends and have a learning experience with beautiful teachers.
          </p>
          <div className="mt-8 flex justify-center space-x-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="flex flex-col items-center h-72 w-52">
            <img
              className="w-full h-full object-cover rounded-full"
              src={photo1}
              alt="Classroom"
            />
          </div>
          <div className="flex flex-col items-center h-72 w-52">
            <img
              className="w-full h-full object-cover rounded-full"
              src={photo2}
              alt="Teaching"
            />
          </div>
          <div className="flex flex-col items-center h-72 w-52">
            <img
              className="w-full h-full object-cover rounded-full"
              src={photo3}
              alt="Sports"
            />
          </div>
          <div className="flex flex-col items-center h-72 w-52">
            <img
              className="w-full h-full object-cover rounded-full"
              src={photo4}
              alt="Annual Day"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white py-10 px-5 md:px-20 mt-10 mb-10">
        <h2 className="text-pink-600 text-center font-bold uppercase text-sm mb-3">
          How It's Work
        </h2>
        <h1 className="text-gray-900 text-center font-bold text-2xl md:text-3xl mb-10">
          How is our tutoring service?
        </h1>
        <div className="relative">
          {/* Decorative dots */}
          <div className="absolute top-5 left-5 w-4 h-4 rounded-full bg-orange-400"></div>
          <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-red-400"></div>
          <div className="absolute bottom-5 right-20 w-4 h-4 rounded-full bg-purple-500"></div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 h-full mt-5">
            <div className="bg-white shadow-md rounded-lg px-5 py-20 text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-purple-500 text-white w-12 h-12 flex justify-center items-center rounded-full">
                  👍
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Relaxing and Learning
              </h3>
              <p className="text-gray-600 text-sm">
                There are several sections available in different versions, but most of them have fun
              </p>
              <a
                href="#"
                className="text-blue-500 text-sm font-medium underline mt-4 block"
              >
                Read More
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-lg px-5 py-20 text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-blue-500 text-white w-12 h-12 flex justify-center items-center rounded-full">
                  🏷️
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Certificate
              </h3>
              <p className="text-gray-600 text-sm">
                We are constantly improving the material for the lessons we want to pass on to others.
              </p>
              <a
                href="#"
                className="text-blue-500 text-sm font-medium underline mt-4 block"
              >
                Read More
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-5 text-center py-20">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-orange-500 text-white w-12 h-12 flex justify-center items-center rounded-full">
                  😊
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Private Mentoring
              </h3>
              <p className="text-gray-600 text-sm">
                All of our specialists in special education have the best educational degrees.
              </p>
              <a
                href="#"
                className="text-blue-500 text-sm font-medium underline mt-4 block"
              >
                Read More
              </a>
            </div>

            <div className="bg-white shadow-lg rounded-lg px-5 py-20 text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="bg-pink-500 text-white w-12 h-12 flex justify-center items-center rounded-full">
                  😊
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Creative Thinking
              </h3>
              <p className="text-gray-600 text-sm">
                All of our specialists in special education have the best educational degrees.
              </p>
              <a
                href="#"
                className="text-blue-500 text-sm font-medium underline mt-4 block"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex justify-center items-center h-screen">
        <div className="relative max-w-[800px] w-full mx-4">
          {/* Person image */}
          <div className="absolute -left-20 -top-0">
            <img src={photo5} alt="Person in graduation attire" className="w-[300px] h-auto rounded-2xl" />
          </div>

          {/* Colored circles */}
          <div className="absolute -left-10 -top-10">
            <div className="w-10 h-10 rounded-full bg-blue-500 animate-pulse"></div>
          </div>
          <div className="absolute -right-10 -top-10">
            <div className="w-8 h-8 rounded-full bg-purple-500 animate-pulse"></div>
          </div>
          <div className="absolute -left-10 -bottom-10">
            <div className="w-6 h-6 rounded-full bg-orange-500 animate-pulse"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 ml-[300px]">
            <h2 className="text-2xl font-bold mb-4">Access to learning anytime and anywhere</h2>
            <p className="mb-6">Make it easier for all students to do learning through digital media with existing media making it easier for students to learn anywhere and anytime.</p>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold mb-2">Learning Methods</h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>World Class</li>
                  <li>Flexible</li>
                  <li>Easy Learning</li>
                  <li>Affordable</li>
                </ul>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              School Features
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="pt-6 px-4 sm:px-6 lg:px-4 xl:px-6 hover:bg-gray-50 transition duration-300 ease-in-out"
              >
                <div className="flow-root">
                  <div className="-mt-6 -mx-4 flex justify-center sm:-mx-6 lg:-mx-4 xl:-mx-6">
                    <div className="inline-flex items-center justify-center rounded-md bg-blue-50 p-3 shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
