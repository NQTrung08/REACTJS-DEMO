import React from 'react'

const SideBar = () => {
  return (
    <div className='border-2 w-[300px] flex flex-col'>
    <div className='border-2 bg-magenta-300 flex-1'>
      Block 1
    </div>
    <div className='w-full border-2 bg-magenta-300 flex-1'>
      Block 2
    </div>
    <div className='w-full border-2 bg-magenta-300 flex-1'>
      Block 3
    </div>
  </div>
  )
}

export default SideBar