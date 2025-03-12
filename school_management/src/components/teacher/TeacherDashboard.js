import React, { useState } from 'react'
import TeacherSidebar from './TeacherSidebar'
import TeacherBody from './TeacherBody'


function TeacherDashboard() {

    const [page, setPage] = useState('🏠 Dashboard')

    const navic =(state)=>{
        setPage(state)
    }

  return (
    <div className='flex'>
        <TeacherSidebar navic={navic} page={page}/>
        <TeacherBody page={page} />
    </div>
  )
}

export default TeacherDashboard