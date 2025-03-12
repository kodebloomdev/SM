import React, { useState } from "react";

const Registration = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    placeOfBirth: "",
    address: "",
    photo: null,
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    city: "",
    country: "",
  });

  // Step 1: User Type Selection
  const UserTypeSelection = () => (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-purple-700">Step: 1 - Select User Type (Role)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          type="button"
          className={`p-6 text-center border-2 rounded-lg transition-all ${
            userType === "teacher" ? "border-purple-700 bg-purple-50" : "border-gray-200 hover:border-purple-300"
          }`}
          onClick={() => setUserType("teacher")}
        >
          <h3 className="text-lg font-semibold">Teacher</h3>
          <p className="text-sm text-gray-600 mt-2">Register as a new teacher</p>
        </button>
        <button
          type="button"
          className={`p-6 text-center border-2 rounded-lg transition-all ${
            userType === "student" ? "border-purple-700 bg-purple-50" : "border-gray-200 hover:border-purple-300"
          }`}
          onClick={() => setUserType("student")}
        >
          <h3 className="text-lg font-semibold">Student</h3>
          <p className="text-sm text-gray-600 mt-2">Register as a new student</p>
        </button>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="px-6 py-2 text-white bg-purple-700 rounded-md hover:bg-purple-800 disabled:opacity-50"
          disabled={!userType}
          onClick={() => setStep(2)}
        >
          Continue
        </button>
      </div>
    </div>
  );

  // Step 2: Personal Details
  const PersonalDetails = () => (
    <div>
      <h2 className="text-lg font-semibold text-purple-700">Step: 2 - {userType === "teacher" ? "Teacher" : "Student"} Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name *</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="First Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name *</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email *</label>
          <input
            type="email"
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone *</label>
          <input
            type="tel"
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
          <input type="date" className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Place of Birth *</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Place of Birth"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Address *</label>
          <textarea
            rows="4"
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Address"
          ></textarea>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Photo *</label>
          <div className="mt-1 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-4">
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                  <span>Upload a file</span>
                  <input type="file" className="sr-only" accept="image/*" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="px-6 py-2 text-purple-700 border border-purple-700 rounded-md hover:bg-purple-100"
          onClick={() => setStep(1)}
        >
          Back
        </button>
        <button type="button" className="px-6 py-2 text-white bg-purple-700 rounded-md hover:bg-purple-800" onClick={() => setStep(3)}>
          Continue
        </button>
      </div>
    </div>
  );

  // Step 3: Education Details
  const EducationDetails = () => (
    <div>
      <h2 className="text-lg font-semibold text-purple-700">Step: 3 - Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">{userType === "student" ? "School" : "University"} *</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder={userType === "student" ? "School Name" : "University Name"}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">{userType === "student" ? "Grade" : "Degree"} *</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder={userType === "student" ? "Grade" : "Degree"}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date *</label>
          <input type="date" className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Date *</label>
          <input type="date" className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">City *</label>
          <input type="text" className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="City" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country *</label>
          <input
            type="text"
            className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Country"
          />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="px-6 py-2 text-purple-700 border border-purple-700 rounded-md hover:bg-purple-100"
          onClick={() => setStep(2)}
        >
          Back
        </button>
        <div className="space-x-4">
          <button type="submit" className="px-6 py-2 text-white bg-purple-700 rounded-md hover:bg-purple-800" onClick={() => setStep(4)}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );

  // Step 4: Preview
  const Preview = () => (
    <div className="space-y-8">
      <h2 className="text-lg font-semibold text-purple-700">Step: 4 - Preview</h2>

      {/* UserType Preview */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900 border-b pb-2">Role</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-900">{userType || "-"}</p>
          </div>
        </div>
      </div>

      {/* Personal Details Preview */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900 border-b pb-2">Personal Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">First Name</p>
            <p className="text-gray-900">{formData.firstName || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Last Name</p>
            <p className="text-gray-900">{formData.lastName || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-gray-900">{formData.email || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="text-gray-900">{formData.phone || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="text-gray-900">{formData.dob || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Place of Birth</p>
            <p className="text-gray-900">{formData.placeOfBirth || "-"}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">Address</p>
            <p className="text-gray-900">{formData.address || "-"}</p>
          </div>
        </div>
      </div>

      {/* Education Details Preview */}
      <div className="space-y-4">
        <h3 className="font-medium text-gray-900 border-b pb-2">Education Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">{userType === "student" ? "School" : "University"}</p>
            <p className="text-gray-900">{formData.institution || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">{userType === "student" ? "Grade" : "Degree"}</p>
            <p className="text-gray-900">{formData.degree || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Start Date</p>
            <p className="text-gray-900">{formData.startDate || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">End Date</p>
            <p className="text-gray-900">{formData.endDate || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">City</p>
            <p className="text-gray-900">{formData.city || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Country</p>
            <p className="text-gray-900">{formData.country || "-"}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="px-6 py-2 text-purple-700 border border-purple-700 rounded-md hover:bg-purple-100"
          onClick={() => setStep(3)}
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 text-white bg-purple-700 rounded-md hover:bg-purple-800"
          onClick={() => {
            alert("Clicked Submit");
          }}
        >
          Submit Registration
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <header className="bg-purple-700 text-white rounded-t-lg p-4">
          <h1 className="text-xl font-semibold">Registration Form</h1>
        </header>
        <div className="p-6">
          {/* New Numbered Progress Bar */}
          <div className="mb-8">
            <div className="relative">
              {/* Progress Line */}
              <div className="h-1 bg-gray-200 absolute top-1/2 left-5 right-5 -translate-y-1/2">
                <div className="h-full bg-purple-700 transition-all duration-300" style={{ width: `${((step - 1) / 3) * 100}%` }}
                ></div>
              </div>

              {/* Progress Steps */}
              <div className="relative flex justify-between">
                {["User Type", "Personal Details", "Education", "Preview"].map((label, index) => (
                  <div
                    key={label}
                    className="flex flex-col items-center mt-5 cursor-pointer"
                    onClick={() => {
                      if (userType) {
                        setStep(index + 1);
                      }
                    }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium 
                        ${
                          step > index + 1
                            ? "bg-purple-700 text-white"
                            : step === index + 1
                            ? "bg-purple-700 text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                    >
                      {index + 1}
                    </div>
                    <span
                    
                    className={`mt-2 text-xs ${
                      step > index + 1
                        ? "text-purple-700"
                        : step === index + 1
                        ? "text-purple-600"
                        : "text-gray-400"
                    }`}
                  >
                    {label}
                  
                  
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Steps */}
          {step === 1 && <UserTypeSelection />}
          {step === 2 && <PersonalDetails />}
          {step === 3 && <EducationDetails />}
          {step === 4 && <Preview />}
        </div>
      </div>
    </div>
  );
};

export default Registration;