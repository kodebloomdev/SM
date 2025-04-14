import React from 'react';

const SchoolHistory = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400 p-6">
      <div className="p-8 max-w-3xl w-full bg-gray-50 rounded-2xl shadow-xl space-y-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-sky-700">Our School History</h2>

        <p className="text-gray-800 leading-relaxed">
          Established in the early 20th century, <strong>Springfield Academy</strong> has been a beacon of education 
          and excellence for over a hundred years. Originally founded as a small community school, 
          it has grown into a premier institution known for its commitment to academic excellence, 
          innovation, and holistic development.
        </p>

        <p className="text-gray-800 leading-relaxed">
          Over the decades, our school has expanded its curriculum, incorporating modern technology 
          and contemporary teaching methods. We take pride in nurturing generations of students 
          who have gone on to excel in various fields, including science, arts, business, and social service.
        </p>

        <p className="text-gray-800 leading-relaxed">
          Today, Springfield Academy stands as a symbol of knowledge, discipline, and integrity, 
          fostering a learning environment that encourages students to think critically and contribute 
          positively to society.
        </p>

        <div className="mt-6 text-center">
          <p className="text-sky-700 font-semibold">
            "Education is the most powerful weapon which you can use to change the world." – Nelson Mandela
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolHistory;
