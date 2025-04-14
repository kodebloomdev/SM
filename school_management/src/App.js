import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import EnquiryForm from './components/enquiry/EnquiryForm';
import Login from './components/login/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import StudentDahboard from './components/student/StudentDahboard'; //this is StudentDahboard   
import Facilities from './components/facilities/Facilities';
import CoreValues from './components/About/CoreValues';
import Principal from './components/About/Principal';
import AnnualReport from './components/About/AnnualReport';
import History from './components/About/History';
import OurInspiration from './components/ourinspiration/OurInspiration';
import ContactUs from "./components/contactus/ContactUs";
import Department from './components/department/Department';
import ResultPage from './components/student/studentComponents/resultpage';
import StudentPaymentInfo from "./components/student/studentComponents/StudentPaymentInfo";
import PaymentConfirmation from "./components/student/studentComponents/PaymentConfirmation";


function App() {
  return (
    <div className='mt-20'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/enquiry' element={<EnquiryForm />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDahboard />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/history" element={<History />} /> 
        <Route path="/annualreport" element={<AnnualReport/>} /> 
        <Route path="/principal" element={<Principal/>}/>   
        <Route path="/corevalues" element={<CoreValues />} />
        <Route path='/ourinspiration' element={<OurInspiration />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/department" element={<Department />} />
        <Route path="/result/:rollNumber/:department/:marks" element={<ResultPage />} />
        <Route path="/studentpayment" element={<StudentPaymentInfo />} />
        <Route path="/paymentconfirmation" element={<PaymentConfirmation />} />
      </Routes>
    </div>
  );
}

export default App;
