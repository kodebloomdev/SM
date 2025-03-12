import React from 'react';

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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 p-4">
      <div className="p-6 max-w-3xl w-full bg-white rounded-xl shadow-lg border border-gray-300 hover:shadow-xl transition-all duration-300">
        <h2 className="text-3xl font-bold text-center text-white bg-gradient-to-r from-purple-600 to-blue-500 py-3 rounded-md mb-4">📞 Contact Us</h2>

        {/* Principal & Vice Principal */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-5 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold mb-2">🎓 School Administration</h3>
          <p><strong>Principal:</strong> {schoolMembers.principal.name}</p>
          <p>Email: <a href={`mailto:${schoolMembers.principal.email}`} className="text-yellow-300 hover:underline">{schoolMembers.principal.email}</a></p>
          <p>Phone: <a href={`tel:${schoolMembers.principal.phone}`} className="text-yellow-300 hover:underline">{schoolMembers.principal.phone}</a></p>

          <div className="mt-3 border-t border-white pt-2">
            <p><strong>Vice Principal:</strong> {schoolMembers.vicePrincipal.name}</p>
            <p>Email: <a href={`mailto:${schoolMembers.vicePrincipal.email}`} className="text-yellow-300 hover:underline">{schoolMembers.vicePrincipal.email}</a></p>
            <p>Phone: <a href={`tel:${schoolMembers.vicePrincipal.phone}`} className="text-yellow-300 hover:underline">{schoolMembers.vicePrincipal.phone}</a></p>
          </div>
        </div>

        {/* HODs */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-5 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold mb-2">🏫 Heads of Departments (HODs)</h3>
          {schoolMembers.hods.map((hod, index) => (
            <div key={index} className="mt-2 bg-white p-3 rounded-md text-gray-800 shadow-md">
              <p><strong>{hod.department}:</strong> {hod.name}</p>
              <p>Email: <a href={`mailto:${hod.email}`} className="text-blue-600 hover:underline">{hod.email}</a></p>
              <p>Phone: <a href={`tel:${hod.phone}`} className="text-blue-600 hover:underline">{hod.phone}</a></p>
            </div>
          ))}
        </div>

        {/* Faculty Members */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-5 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">👨‍🏫 Faculty Members</h3>
          {schoolMembers.faculty.map((faculty, index) => (
            <div key={index} className="mt-2 bg-white p-3 rounded-md text-gray-800 shadow-md">
              <p><strong>{faculty.subject}:</strong> {faculty.name}</p>
              <p>Email: <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:underline">{faculty.email}</a></p>
              <p>Phone: <a href={`tel:${faculty.phone}`} className="text-blue-600 hover:underline">{faculty.phone}</a></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
