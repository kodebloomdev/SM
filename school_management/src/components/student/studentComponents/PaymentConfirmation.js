import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentConfirmation = () => {
  const [paymentInfo, setPaymentInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("studentPayment");
    if (storedData) {
      setPaymentInfo(JSON.parse(storedData));
    } else {
      navigate("/"); // Redirect if no data found
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-center">Payment Confirmation</h2>

        {paymentInfo ? (
          <div className="mt-4">
            <p><strong>Student:</strong> {paymentInfo.name}</p>
            <p><strong>Amount Paid:</strong> {paymentInfo.amount}</p>
            <p><strong>Payment Method:</strong> {paymentInfo.method}</p>
            <p><strong>Full Date of Birth:</strong> {paymentInfo.dob}</p>
            <p><strong>Phone Number:</strong> {paymentInfo.phone}</p>
            <p><strong>Class / Section:</strong> {paymentInfo.classSection}</p>
            <p><strong>Roll Number:</strong> {paymentInfo.rollNumber}</p>

            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg w-full mt-4" onClick={() => navigate("/")}>
              Go to Home
            </button>
          </div>
        ) : (
          <p className="text-center mt-4">No payment information found.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentConfirmation;