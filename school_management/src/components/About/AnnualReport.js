import React from "react";

function AnnualReport() {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-blue-900 text-center mb-8">
        Annual Report - 2024
      </h1>

      {/* Report Content */}
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-lg border border-gray-200">
        
        {/* Introduction */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Overview</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Our school has achieved remarkable progress in the academic year 2023-2024. 
            We have introduced new initiatives, improved academic performance, and strengthened 
            our extracurricular activities. This report provides insights into our journey.
          </p>
        </div>

        {/* Academic Performance */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Academic Achievements</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 leading-relaxed">
            <li>95% pass rate in board examinations.</li>
            <li>Introduction of new STEM learning programs.</li>
            <li>30+ students won national and international competitions.</li>
          </ul>
        </div>

        {/* Extracurricular Activities */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Extracurricular Achievements</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 leading-relaxed">
            <li>School football team won the inter-school championship.</li>
            <li>Annual Science Fair showcased 50+ student projects.</li>
            <li>Drama club won the state-level competition.</li>
          </ul>
        </div>

        {/* Financial Summary */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Financial Summary</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            The school has maintained a stable financial position with increased 
            investments in infrastructure and teacher training programs.
          </p>
        </div>

        {/* Future Plans */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Future Plans</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700 leading-relaxed">
            <li>New digital library and smart classroom initiatives.</li>
            <li>Expansion of sports facilities.</li>
            <li>Scholarships for underprivileged students.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnnualReport;
