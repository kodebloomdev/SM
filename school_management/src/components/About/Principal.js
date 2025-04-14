import React from "react";

function Principal() {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl bg-white p-8 shadow-2xl rounded-lg border-t-4 border-blue-700">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-blue-900 text-center mb-6 drop-shadow-lg">
          Message from the Principal
        </h1>

        {/* Principal's Message */}
        <p className="text-lg text-gray-800 text-center italic bg-blue-100 p-4 rounded-lg shadow-md">
          "Education is not just about learning facts but about training the mind to think."
        </p>

        <div className="mt-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-3">
              Welcome Message
            </h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Dear Students, Parents, and Staff,
              <br />
              Welcome to our school! Our goal is to provide a safe, engaging, and innovative learning environment. We are committed to academic excellence, character development, and holistic education.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-3">
              Our Vision
            </h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              We aim to nurture future leaders by fostering curiosity, creativity, and compassion in every student. Our school stands for inclusivity, discipline, and innovation in education.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 border-l-4 border-blue-600 pl-3">
              Contact
            </h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              📧 <span className="font-semibold">Email:</span> principal@schoolname.edu
              <br />
              ☎ <span className="font-semibold">Phone:</span> +123 456 7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principal;
