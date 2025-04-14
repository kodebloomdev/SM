import React from 'react'
import english from '../../../assets/course-english.png'
import design from '../../../assets/course-design.png'
import business from '../../../assets/course-business.png'

const course = [
  {
    id: 1,
    title: "English Lecture",
    description: "Language lessons with the most popular teachers",
    category: "Languages",
    rating: 4.5,
    startDate: "20 July",
    image: english, // Replace with actual image URL
  },
  {
    id: 2,
    title: "Design Strategy",
    description: "Lesson on planning a design concept and proper planning of work",
    category: "UI/UX Design",
    rating: 4.0,
    startDate: "22 July",
    image: design, // Replace with actual image URL
  },
  {
    id: 3,
    title: "Business Lecture",
    description: "Lectures on how to build your business safely with ease of new projects",
    category: "Marketing | Finance",
    rating: 4.2,
    startDate: "26 July",
    image: business, // Replace with actual image URL
  },
];

const schedule = [
  { date: "06", title: "English", chapters: "10 of 20 chapters", time: "15:00 - 16:30 PM" },
  { date: "07", title: "Business Strategy", chapters: "9 of 30 chapters", time: "10:00 - 11:30 AM" },
  { date: "07", title: "Mobile UX", chapters: "11 of 13 chapters", time: "09:00 - 10:30 AM" },
  { date: "08", title: "Illustration", chapters: "10 of 20 chapters", time: "10:00 - 12:00 PM" },
  { date: "08", title: "Product Design", chapters: "12 of 20 chapters", time: "09:00 - 11:30 AM" },
];

const CourseCard = ({ course }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex space-x-4">
    <img
      src={course.image}
      alt={course.title}
      className="w-16 h-16 rounded-lg object-cover"
    />
    <div className="flex-1 h-20 overflow-hidden ">
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-500">{course.description}</p>
      <p className="text-sm text-gray-400 mt-2">{course.category}</p>
    </div>
    <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded-lg">
      <p className="font-semibold mt-1">Start: {course.startDate}</p>
    </button>
  </div>
);

const ScheduleItem = ({ item }) => (
  <div className="flex items-center justify-between py-2 border-b">
    <div>
      <p className="text-sm text-gray-800">{item.title}</p>
      <p className="text-xs text-gray-500">{item.chapters}</p>
    </div>
    <p className="text-sm text-gray-600">{item.time}</p>
  </div>
);




function Courses() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-start">
        <h1 className="text-2xl font-bold">Courses</h1>
        <div>
          <p className="text-gray-500 text-sm">July 2021</p>
          <div className="text-gray-800 flex space-x-2 mt-2">
            <button className="p-2 bg-gray-200 rounded">{"<"}</button>
            <button className="p-2 bg-gray-200 rounded">{">"}</button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {course.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="mt-8 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold">Schedule</h2>
        <div className="mt-4">
          {schedule.map((item, index) => (
            <ScheduleItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses