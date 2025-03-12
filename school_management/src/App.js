import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import EnquiryForm from './components/enquiry/EnquiryForm';
import Login from './components/login/Login';
import AdminDashboard from './components/admin/AdminDashboard';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import StudentDashboard from './components/student/StudentDahboard';
import ResultPage from './components/student/studentComponents/resultpage';
import StudentPaymentInfo from "./components/student/studentComponents/StudentPaymentInfo";
import PaymentConfirmation from "./components/student/studentComponents/PaymentConfirmation";
import History from './components/About/History';
import Facilities from './components/facilities/Facilities';
import Department from './components/department/Department';
import ContactUs from "./components/contactus/ContactUs";
import OurInspiration from './components/ourinspiration/OurInspiration';
import Navbar from "./header/Navbar"; // Correct import path
import CoreValues from './components/About/CoreValues';
import Principal from './components/About/Principal';
import AnnualReport from './components/About/AnnualReport';
import Library from './components/facilities/Library';
import ScienceSubject from './components/department/ScienceSubject';




function App() {
  return (
    <div>
       <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/enquiry' element={<EnquiryForm />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/result/:rollNumber/:department/:marks" element={<ResultPage />} />
        <Route path="/studentpayment" element={<StudentPaymentInfo />} />
        <Route path="/paymentconfirmation" element={<PaymentConfirmation />} />
        <Route path="/history" element={<History />} /> 
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/department" element={<Department />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/ourinspiration' element={<OurInspiration />} />
        <Route path="/corevalues" element={<CoreValues />} />
        <Route path="/principal" element={<Principal/>}/>    
        <Route path="/annualreport" element={<AnnualReport/>} />  
        <Route path="/library" element={<Library/>} />   
        <Route path="/sciencesubject" element={<ScienceSubject/>} />   
         </Routes>
    </div>
  );
}

export default App;
