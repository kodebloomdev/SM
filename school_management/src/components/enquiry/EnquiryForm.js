import React, { useState } from "react";

const EnquiryForm = () => {
  const [enquiryDetails, setEnquiryDetails] = useState({
    studentName: "",
    studentAge: "",
    parentName: "",
    contactNumber: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEnquiryDetails({ ...enquiryDetails, [e.target.name]: e.target.value });
  };

  const phoneRegex = /^[0-9]{10}$/;
  const ageRegex = /^[0-9]{1,2}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = {};

    if (enquiryDetails.studentName === "") {
      validation.studentName = "Please enter student name";
    }
    if (enquiryDetails.studentAge === "") {
      validation.studentAge = "Please enter student age";
    } else if (!ageRegex.test(enquiryDetails.studentAge)) {
      validation.studentAge = "Enter correct student age";
    }
    if (enquiryDetails.parentName === "") {
      validation.parentName = "Please enter parent name";
    }
    if (enquiryDetails.contactNumber === "") {
      validation.contactNumber = "Please enter phone number";
    } else if (!phoneRegex.test(enquiryDetails.contactNumber)) {
      validation.contactNumber = "Enter correct phone number";
    }
    if (enquiryDetails.email === "") {
      validation.email = "Please enter email";
    }
    if (enquiryDetails.address === "") {
      validation.address = "Please enter address";
    }

    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      alert("Thank you for your enquiry! We will be in touch shortly.");
      setEnquiryDetails({
        studentName: "",
        studentAge: "",
        parentName: "",
        contactNumber: "",
        email: "",
        address: "",
      });
    }
  };

  return (
    <div className=" mt-20 py-5 bg-gray-100 ">
    <form
      className="bg-white p-8 rounded-lg shadow-lg max-w-4xl md:mx-auto mx-5 "
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold text-center mb-6">School Admission Enquiry Form</h1>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Student Name:</label>
        <input
          type="text"
          name="studentName"
          value={enquiryDetails.studentName}
          onChange={handleChange}
          placeholder="Student Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        {errors.studentName && <p className="text-red-500 text-sm">{errors.studentName}</p>}
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Student Age:</label>
        <input
          type="number"
          name="studentAge"
          value={enquiryDetails.studentAge < 0 ? 0 : enquiryDetails.studentAge}
          onChange={handleChange}
          placeholder="Student Age"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        {errors.studentAge && <p className="text-red-500 text-sm">{errors.studentAge}</p>}
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Parent Name:</label>
        <input
          type="text"
          name="parentName"
          value={enquiryDetails.parentName}
          onChange={handleChange}
          placeholder="Parent Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName}</p>}
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Contact Number:</label>
        <input
          type="tel"
          name="contactNumber"
          value={enquiryDetails.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={enquiryDetails.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Address:</label>
        <textarea
          name="address"
          value={enquiryDetails.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
        ></textarea>
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  );
};

export default EnquiryForm;
