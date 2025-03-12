import React from "react";
import Toast from "../../Common/toast/Toast";
import PaymentOption from "../../paymentOption/PaymentOption";

const profiles = [
  {
    name: "Ronima Dean",
    price: "$1200",
    role: "I Standard",
    
  },
  {
    name: "Illiana Pinto",
    price: "$700",
    role: "II Standard",
    
  },
  {
    name: "Hilman Kenny",
    price: "$900",
    role: "III Standard",
    
  },
  {
    name: "Johan Marden",
    price: "$1600",
    role: "IV Standard",
    
  },
  {
    name: "Bonny Kolx",
    price: "$1700",
    role: "V Standard",
   
  },
  {
    name: "Ibram Hox",
    price: "$1900",
    role: "VI Standard",
    
  },
];

const ProfileCard = ({ name, price, role, setToastActive,setActive }) => {
  const [value,setValue] = React.useState();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <h3 className="text-lg font-semibold">{name} - {price}</h3>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
        
      </div>
      <div className="w-full h-fit">
          <textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter message to send" className="w-full border p-3 rounded-lg mb-4" />
        </div>
      <div className="flex justify-end w-full gap-6">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={()=>{setToastActive(true)}}>Connect</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={()=>{setActive(true)}}>Pay Now</button>
      </div>
    </div>
  );
};

const Paymentlnfo = () => {
  const [toastActive,setToastActive] = React.useState(false);
  const [active,setActive] = React.useState(false);
  React.useEffect(()=>{
if(toastActive){
  setTimeout(()=>{
setToastActive(false);
  },2000)
}
  },[toastActive])
  return (
    <>
   
    <div className="min-h-screen bg-gray-50 p-6">
      {toastActive &&
      <div className="fixed top-20 z-50 bg-red-800 right-10">
      <Toast />
      </div>
}
<div>
  <PaymentOption active={active} onClose={()=>{setActive(false)}} />
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile}  setToastActive={(e)=>{setToastActive(e)}} setActive={(e)=>{setActive(e)}} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Paymentlnfo;
