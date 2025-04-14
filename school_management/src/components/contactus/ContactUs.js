import React from 'react';
import contactLeftImg from '../../assets/cont1.avif';
import contactRightImg from '../../assets/cont2.avif';

const ContactUs = () => {
  const schoolMembers = {
    principal: { name: "Dr. Emily Carter", email: "principal@school.com", phone: "+123 456 7890" },
    vicePrincipal: { name: "Mr. John Smith", email: "viceprincipal@school.com", phone: "+123 456 7891" },
    hods: [
      { department: "Science", name: "Dr. Alan Walker", email: "alan.walker@school.com", phone: "+123 456 7892" },
      { department: "Mathematics", name: "Prof. Rachel Green", email: "rachel.green@school.com", phone: "+123 456 7893" },
      { department: "Humanities", name: "Dr. Lisa Brown", email: "lisa.brown@school.com", phone: "+123 456 7894" },
      { department: "Commerce", name: "Dr. Robert Wilson", email: "robert.wilson@school.com", phone: "+123 456 7895" },
    ],
    faculty: [
      { name: "Mr. James Taylor", subject: "Physics", email: "james.taylor@school.com", phone: "+123 456 7896" },
      { name: "Ms. Olivia Martin", subject: "Chemistry", email: "olivia.martin@school.com", phone: "+123 456 7897" },
      { name: "Mr. Daniel Lee", subject: "Mathematics", email: "daniel.lee@school.com", phone: "+123 456 7898" },
      { name: "Ms. Sophia Hernandez", subject: "History", email: "sophia.hernandez@school.com", phone: "+123 456 7899" },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 overflow-hidden">

      {/* Left Image */}
      <div className="w-full md:w-[35%] hidden md:block">
        <img
          src={contactLeftImg}
          alt="Left Side"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center Content */}
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="p-6 max-w-xl w-full text-gray-800 rounded-xl shadow-xl border border-gray-300 bg-gradient-to-br from-gray-100 to-gray-300">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-gray-300 to-gray-400 py-3 rounded-md mb-4 shadow-md text-gray-800">
            📞 Contact Us
          </h2>

          {/* Admin */}
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-5 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">🎓 School Administration</h3>
            <p><strong>Principal:</strong> <span className="text-gradient-silver">{schoolMembers.principal.name}</span></p>
            <p>Email: <span className="text-gradient-silver">{schoolMembers.principal.email}</span></p>
            <p>Phone: <span className="text-gradient-silver">{schoolMembers.principal.phone}</span></p>

            <div className="mt-3 border-t border-gray-400 pt-2">
              <p><strong>Vice Principal:</strong> <span className="text-gradient-silver">{schoolMembers.vicePrincipal.name}</span></p>
              <p>Email: <span className="text-gradient-silver">{schoolMembers.vicePrincipal.email}</span></p>
              <p>Phone: <span className="text-gradient-silver">{schoolMembers.vicePrincipal.phone}</span></p>
            </div>
          </div>

          {/* HODs */}
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-5 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">🏫 Heads of Departments (HODs)</h3>
            {schoolMembers.hods.map((hod, index) => (
              <div key={index} className="mt-2 bg-gradient-to-br from-gray-100 to-gray-200 p-3 rounded-md shadow-sm">
                <p><strong>{hod.department}:</strong> <span className="text-gradient-silver">{hod.name}</span></p>
                <p>Email: <span className="text-gradient-silver">{hod.email}</span></p>
                <p>Phone: <span className="text-gradient-silver">{hod.phone}</span></p>
              </div>
            ))}
          </div>

          {/* Faculty */}
          <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-5 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">👨‍🏫 Faculty Members</h3>
            {schoolMembers.faculty.map((faculty, index) => (
              <div key={index} className="mt-2 bg-gradient-to-br from-gray-100 to-gray-200 p-3 rounded-md shadow-sm">
                <p><strong>{faculty.subject}:</strong> <span className="text-gradient-silver">{faculty.name}</span></p>
                <p>Email: <span className="text-gradient-silver">{faculty.email}</span></p>
                <p>Phone: <span className="text-gradient-silver">{faculty.phone}</span></p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[35%] hidden md:block">
        <img
          src={contactRightImg}
          alt="Right Side"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactUs;
