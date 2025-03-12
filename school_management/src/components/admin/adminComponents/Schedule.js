import React, { useState } from 'react'


function Schedule() {

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20px"
      height="20px"
    >
      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
    </svg>
  );

  const [schedule, setSchedule] = useState([
    {
      "title": "Independence Day Celebration",
      "date": "2025-08-15",
      "contactClass": "Class A",
      "description": "Celebration of India's Independence Day with cultural programs and speeches.",
      "timing": "Morning",
      "startTime": "09:00 AM",
      "moto": "Freedom in the Mind, Strength in the Words"
    },
    {
      "title": "Republic Day Celebration",
      "date": "2025-01-26",
      "contactClass": "Class B",
      "description": "Celebration of India's Republic Day with flag hoisting and patriotic events.",
      "timing": "Morning",
      "startTime": "08:30 AM",
      "moto": "Unity in Diversity"
    },
    {
      "title": "Quarterly Exam",
      "date": "2025-03-10",
      "contactClass": "All Classes",
      "description": "Quarterly academic examination for all students.",
      "timing": "Full Day",
      "startTime": "09:00 AM",
      "moto": "Success Through Preparation"
    },
    {
      "title": "Half-Yearly Exam",
      "date": "2025-06-15",
      "contactClass": "All Classes",
      "description": "Mid-year academic assessment covering half of the syllabus.",
      "timing": "Full Day",
      "startTime": "09:00 AM",
      "moto": "Excellence in Effort"
    },
    {
      "title": "Annual Exam",
      "date": "2025-12-01",
      "contactClass": "All Classes",
      "description": "End-of-year comprehensive exams for all grades.",
      "timing": "Full Day",
      "startTime": "09:00 AM",
      "moto": "Aim for the Stars"
    },
    {
      "title": "Pongal Celebration",
      "date": "2025-01-15",
      "contactClass": "Class C",
      "description": "Traditional Pongal celebration with cultural activities and festivities.",
      "timing": "Morning",
      "startTime": "09:00 AM",
      "moto": "Harvest Happiness"
    },
    {
      "title": "Diwali Celebration",
      "date": "2025-11-12",
      "contactClass": "Class D",
      "description": "Diwali celebration with lighting of diyas, sweets distribution, and performances.",
      "timing": "Evening",
      "startTime": "05:30 PM",
      "moto": "Light Over Darkness"
    },
    {
      "title": "Ayudha Pooja Celebration",
      "date": "2025-10-23",
      "contactClass": "Class E",
      "description": "Traditional Ayudha Pooja with decoration and rituals.",
      "timing": "Morning",
      "startTime": "10:00 AM",
      "moto": "Gratitude in Work"
    },
    {
      "title": "Christmas Celebration",
      "date": "2025-12-25",
      "contactClass": "Class F",
      "description": "Christmas celebration with carols, games, and a visit from Santa.",
      "timing": "Morning",
      "startTime": "10:30 AM",
      "moto": "Joy to the World"
    },
    {
      "title": "Farewell Day",
      "date": "2025-03-31",
      "contactClass": "Class 12",
      "description": "A farewell event to bid goodbye to the outgoing students.",
      "timing": "Evening",
      "startTime": "06:00 PM",
      "moto": "Wishing Bright Futures"
    },
    {
      "title": "Annual Day Celebration",
      "date": "2025-04-15",
      "contactClass": "All Classes",
      "description": "A grand event showcasing talent and achievements.",
      "timing": "Full Day",
      "startTime": "09:00 AM",
      "moto": "Celebrating Excellence"
    },
    {
      "title": "Sports Day",
      "date": "2025-02-20",
      "contactClass": "All Classes",
      "description": "Sports day with track and field events, games, and awards.",
      "timing": "Full Day",
      "startTime": "08:00 AM",
      "moto": "Faster, Higher, Stronger"
    }
  ].sort((a,b)=>new Date(a.date) - new Date(b.date) )
)

  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [makeSchedule, setMakeSchedule] = useState(false)

  const selectSchedule = (id) => {
    setShow(true);
    setSelectedData([schedule[id]]);
  };

const closeBackdrop = () =>{
  setSelectedData([]);
  setShow(false)
  setMakeSchedule(false)
}

const ScheduleDetails = ({data})=>{
  return(
    <div className="absolute top-44 md:left-[25%]  z-50">
      {data.map((item, i) => (
        <div key={i} className="p-5 bg-white border rounded-lg shadow-lg flex flex-row-reverse gap-4 items-start ">
          <button
            onClick={closeBackdrop}
            className="inline-block border p-1 rounded-md shadow-md"
          >
            {closeIcon}
          </button>
          <div className="mt-3 space-y-2">
            <p className="font-bold text-lg">{item.title}</p>
            <p>{item.description}</p>
            <p>Class: {item.contactClass}</p>
            <p>Timing: {item.timing}</p>
            <p>Start Time: {item.startTime}</p>
            <p className="italic">Motto: {item.moto}</p>
            <p className='flex justify-end'>
              <button
                onClick={() =>
                {  setSchedule((prev) =>
                    prev.filter((_, index) => index !== schedule.findIndex((item) => item === data[0]))
                  );
                  setShow(false);
                  setSelectedData([]);
                }}
                className="px-2 py-1 rounded shadow-md bg-[red] font-semibold text-white"
                >
                Remove
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const ScheduleForm =()=>{

  const [data, setData] = useState({
    title:'',
    date:'',
    contactClass:'',
    description:'',
    timing:'',
    startTime:'',
    moto:''
  })

  const handleChange =(e)=>{
    setData({...data, [e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    setSchedule(prev=> [...prev,data])
    setMakeSchedule(false)
    setShow(false)
  }

  return(
    <div className="absolute top-10 md:left-[25%] bg-white min-w-72 z-50 rounded-lg shadow-md ">
      <form className='flex flex-col space-y-4 justify-center p-5 ' onSubmit={handleSubmit}>
        <legend className='text-center font-semibold'>Make Schedule</legend>
        <input onChange={handleChange} name='title' value={data.title} type='text' className='border p-1' placeholder='Enter title...' />
        <input onChange={handleChange} name='date' value={data.date} type='date' className='border p-1' placeholder='Select date...' />
        <input onChange={handleChange} name='contactClass' value={data.contactClass} type='text' className='border p-1' placeholder='Enter contactClass...' />
        <input onChange={handleChange} name='description' value={data.description} type='text' className='border p-1' placeholder='Enter description...' />
        <input onChange={handleChange} name='timing' value={data.timing} type='text' className='border p-1' placeholder='Enter timing...' />
        <input onChange={handleChange} name='startTime' value={data.startTime} type='text' className='border p-1' placeholder='Enter startTime...' />
        <input onChange={handleChange} name='moto' value={data.moto} type='text' className='border p-1' placeholder='Enter moto...' />
        <button className='border p-1 bg-blue-500 text-white font-semibold'>sumbit</button>
      </form>
    </div>
  )
}

  return (
    <>
      <div className="relative">
        <h2 className='py-2 px-4  flex justify-between ' >
          <span className="font-bold text-gray-800 text-xl p-2">Annual Schedules</span>
          <button className='px-4 font-semibold text-white bg-green-500 rounded-md shadow-md' onClick={()=>{setShow(true); setMakeSchedule(true)}}>Make Schedule</button>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[90vh] overflow-y-auto">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="m-3 border p-5 rounded-lg shadow-md bg-white  flex justify-between items-center"
            >
              <div className='space-y-2'>
                <p className="font-semibold text-gray-700">
                  {item.title}
                </p>
                <p className="text-gray-500 italic">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="font-semibold text-gray-700">
                  {item.startTime}
                </p>
              </div>
              <p className="">
                <button
                  className="shadow-md rounded-md px-2 py-1 bg-orange-500 font-semibold text-white"
                  onClick={() => selectSchedule(i)}
                >
                  Show
                </button>
              </p>
            </div>
          ))}
        </div>
        {selectedData.length > 0 && <ScheduleDetails data={selectedData} />}
        {makeSchedule === true && <ScheduleForm /> }
      </div>
      {show && (
        <div
          className="fixed top-0 left-0 min-h-screen w-full bg-black bg-opacity-10 z-20"
          onClick={closeBackdrop}
        ></div>
      )}
    </>
  );
}

export default Schedule