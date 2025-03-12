import React from 'react'
import TeacherPanelDash from './teacherComponents/TeacherPanelDash'
import TeacherStudent from './teacherComponents/TeacherStudents'
import TeacherCourses from './teacherComponents/TeacherCourses'
import TeacherResult from './teacherComponents/TeacherResult'
import TeacherNotification from './teacherComponents/TeacherNotification'


function TeacherBody({page}) {

    const obj = {
        '🏠 Dashboard': TeacherPanelDash,
        '📝 Students': TeacherStudent,
        '📚 Courses' : TeacherCourses,
        '📊 Result' : TeacherResult, 
        '🔔 Notification' : TeacherNotification
    }


    const Component = obj[page] 


  return (
    <div className='mt-1 w-full bg-gray-100'>
        <Component />
    </div>
  )
}

export default TeacherBody