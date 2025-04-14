import React, { useState } from 'react'
import StudentSidebar from './StudentSidebar'
import StudentBody from './StudentBody'
// added some logic here

function StudentDahboard() {

    const [page, setPage] = useState('🏠 Dashboard')
    
        const navic =(state)=>{
            setPage(state)
        }

  return (
    <div className='flex'>
        <StudentSidebar navic={navic} page={page}/>
        <StudentBody page={page} />
    </div>
  )
}

export default StudentDahboard;
