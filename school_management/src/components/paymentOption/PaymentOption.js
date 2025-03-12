import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

const PaymentOption = ({active,onClose}) => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(()=>{
if(active){
    setIsOpen(true)
}
  },[active])

  const handleClose = () => {
    setIsOpen(false);
    onClose()
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 ">
            <div className="w-full max-w-4xl ">
          <div className="relative flex flex-col items-center justify-center h-[85vh] rounded-xl bg-gray-100 p-4 ">
            <button className=" absolute right-10 top-10 hover:bg-gray-200 p-2 rounded-full" onClick={handleClose}>
                <CgClose />
            </button>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          Choose Payment Option
        </h1>
        <div className="space-y-4">
          <button className="flex items-center justify-between w-full px-4 py-3 border rounded-lg text-gray-800 hover:bg-gray-50">
            <span>Debit / Credit Card</span>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/bank-card-back-side.png"
              alt="Card Icon"
              className="w-5 h-5"
            />
          </button>
          <button className="flex items-center justify-between w-full px-4 py-3 border rounded-lg text-gray-800 hover:bg-gray-50">
            <span>Internet Banking</span>
            <img
              src="https://img.icons8.com/ios-filled/50/000000/bank.png"
              alt="Bank Icon"
              className="w-5 h-5"
            />
          </button>
          <button className="flex items-center justify-between w-full px-4 py-3 border rounded-lg text-gray-800 hover:bg-gray-50">
            <span>GPay</span>
            <img
              src="https://img.icons8.com/color/50/000000/google-pay-india.png"
              alt="GPay Icon"
              className="w-5 h-5"
            />
          </button>
          <button className="flex items-center justify-between w-full px-4 py-3 border rounded-lg text-gray-800 hover:bg-gray-50">
            <span>PhonePe</span>
            <img
              src="https://img.icons8.com/color/50/000000/rupay.png"
              alt="PhonePe Icon"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </div>
    </div>
        </div>
      )}
    </>
  );
};

export default PaymentOption;
