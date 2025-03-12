import React, { useState } from 'react'
import AdminSidebar from './AdminSidebar'
import AdminBody from './AdminBody'

function AdminDashboard() {

    const [page, setPage] = useState('🏠 Dashboard')

    const navic =(state)=>{
        setPage(state)
    }

  return (
    <div className='flex'>
        <AdminSidebar navic={navic} page={page}/>
        <AdminBody page={page} />
    </div>
  )
}

export default AdminDashboard