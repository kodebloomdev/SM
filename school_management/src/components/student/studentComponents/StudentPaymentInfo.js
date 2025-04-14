import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentOption = ({ active, onClose, onConfirm }) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mb-4"
          onClick={() => onConfirm("Credit/Debit Card")}
        >
          Credit/Debit Card
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg w-full mb-4"
          onClick={() => onConfirm("UPI")}
        >
          UPI
        </button>
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-lg w-full"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const StudentPaymentInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    dob: "",
    classSection: "",
    rollNumber: "",
    scholarType: "",
    phone: "",
    mother: "",
    father: "",
  });

  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.amount || !formData.dob || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    setActive(true);
  };

  const handlePayment = (method) => {
    const paymentData = { ...formData, method };

    console.log("Saving payment data:", paymentData);
    localStorage.setItem("studentPayment", JSON.stringify(paymentData));

    setTimeout(() => {
      navigate("/paymentconfirmation");
    }, 500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-center">Student Payment Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mt-3"
          required
        />
        <input
          type="text"
          name="amount"
          placeholder="Amount to Pay"
          value={formData.amount}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mt-3"
          required
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mt-3"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mt-3"
          required
        />
        <input
          type="text"
          name="classSection"
          placeholder="Class / Section"
          value={formData.classSection}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mt-3"
        />
        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          value={formData.rollNumber}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mt-3"
        />
        <input
          type="text"
          name="scholarType"
          placeholder="Scholar Type"
          value={formData.scholarType}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mt-3"
        />
        <input
          type="text"
          name="mother"
          placeholder="Mother's Name"
          value={formData.mother}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mt-3"
        />
        <input
          type="text"
          name="father"
          placeholder="Father's Name"
          value={formData.father}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full mt-3"
        />

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
          onClick={handleSubmit}
        >
          Proceed to Payment
        </button>
      </div>

      {/* Payment Option Modal */}
      <PaymentOption active={active} onClose={() => setActive(false)} onConfirm={handlePayment} />
    </div>
  );
};

export default StudentPaymentInfo;
