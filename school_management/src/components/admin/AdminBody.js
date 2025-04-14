import React from 'react'
import AdminPanelDash from './adminComponents/AdminPanelDash'
import Courses from './adminComponents/Courses'
import Result from './adminComponents/Result'
import PaymentInfo from './adminComponents/PaymentInfo'
import Registration from './adminComponents/Registration'
import Notification from './adminComponents/Notification'
import Schedule from './adminComponents/Schedule'


function AdminBody({page}) {

    const obj = {
        '🏠 Dashboard' : AdminPanelDash,
        '💳 Payment Info' : PaymentInfo,
        '📝 Registration' : Registration,
        '📚 Courses' : Courses,
        '📊 Result' : Result,
        '🔔 Notification' : Notification,
        '🗓 Schedule' : Schedule, 
    }


    const Component = obj[page] 

  return (
    <div className='w-full mt-1 bg-gray-100'>
        <Component />
    </div>
  )
}

export default AdminBody