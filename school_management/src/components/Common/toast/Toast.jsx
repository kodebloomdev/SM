import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'

export default function Toast() {

  return (
    <section className='fixed top-10 right-10 z-50'>
    <div  class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow  " role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
       <BiCheckCircle />
    </div>
    <div class="ms-3 text-sm font-normal">Sucessfully done.</div>

</div>
    
    </section>
  )
}
