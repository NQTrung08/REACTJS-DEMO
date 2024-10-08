import React from 'react'

const Navigation = () => {
  return (
    <div className="border-2 p-3 mb-2">
      <div className='flex justify-between'>
        <div className=" flex gap-3">
          <div className="">
            Home
          </div>
          <span>|</span>
          <div className="">
            Students
          </div>
          <span>|</span>
          <div className="">
            Courses
          </div>
          <span>|</span>
          <div className="">
            About Us
          </div>
          <span>|</span>
          <div>
            Contact Us
          </div>
        </div>
        <div className="search border-2 w-1/3 rounded-2xl pl-4 text-gray-300">
          Search
        </div>
      </div>
    </div>
  )
}

export default Navigation