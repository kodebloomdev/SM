import React from "react";

// NoticeCard Component
const NoticeCard = ({ image, title, author }) => {
  return (
    <div className="flex items-center gap-4 p-4 mb-4 bg-white shadow-md rounded-lg">
      <img
        src={image}
        alt="Notice"
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="text-sm font-bold mb-1">{title}</h3>
        <p className="text-xs text-gray-500">By - {author}</p>
      </div>
    </div>
  );
};

// Notice Component
const notices = [
  {
    id: 1,
    image: "https://via.placeholder.com/100", // Replace with your image
    title: "Notice of Special Examinations of Semester Spring 2021",
    author: "Justin Langer",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    title: "Time Extension Notice of Semester Admission",
    author: "Danial Vatory",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/100",
    title: "COVID-19 Vaccination Survey October 2021",
    author: "Jacob Oram",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/100",
    title: "Scholarship Viva Notice Spring 2021",
    author: "name",
  },
];

const Notice = () => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-4">Notice Board</h1>
      <div className="h-72 overflow-y-auto">
        {notices.map((notice) => (
          <NoticeCard
            key={notice.id}
            image={notice.image}
            title={notice.title}
            author={notice.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Notice;
