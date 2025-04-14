import React from 'react'
import StudentPanelDash from './studentComponents/StudentPanelDash'
import StudentPaymentInfo from './studentComponents/StudentPaymentInfo'
import StudentCourses from './studentComponents/StudentCourses'
import StudentResult from './studentComponents/StudentResult'
import StudentNotification from './studentComponents/StudentNotification'


function StudentBody({page}) {

    const obj = {
        '🏠 Dashboard': StudentPanelDash,
        '💳 Payment Info': StudentPaymentInfo,
        '📚 Courses' : StudentCourses,
        '📊 Result' : StudentResult, 
        '🔔 Notification' : StudentNotification
    }

    const Component = obj[page] 

  return (
    <div className='mt-1 w-full bg-gray-100'>
        <Component />
    </div>
  )
}

export default StudentBody