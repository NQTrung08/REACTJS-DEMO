import React from 'react'

const Footer = () => {
  return (
    <div className="border-2 mt-5 p-3 flex justify-between">
      <p className="desc">

        @2012 - TapChiLapTrinh
      </p>

      <div className="flex gap-3 text-blue-400">
        <div className="underline">
          <span>
            Home
          </span>
        </div>
        <span>|</span>
        <div className="underline">
          <span>Students</span>
        </div>
        <span>|</span>
        <div className="underline ">
          <span>Courses</span>
        </div>
        <span>|</span>
        <div className="underline ">
          <span>
            About Us
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer