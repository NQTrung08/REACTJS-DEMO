import React from 'react'

const Content = () => {
  const items = [
    {
      id: 1,
      title: 'News 1'
    },
    {
      id: 2,
      title: 'News 2'
    },
    {
      id: 3,
      title: 'News 3'
    },
    {
      id: 4,
      title: 'News 4'
    },
    {
      id: 5,
      title: 'News 5'
    },

  ]
  return (
    <div className="content flex-1">

      <div className='flex gap-2 items-center justify-center w-full'>
        <div className="flex-1 text-center pt-10 pb-10 border-2">
          Hot News
        </div>
        <div className="flex-1 text-center pt-10 pb-10 border-2">
          Photo Slide
        </div>
      </div>


      <div className="grid grid-cols-3 gap-2 mt-4">
        {
          items.map((item) => (
            <div className="col-span-1 text-center pt-10 pb-10 border-2">
              {item.title}
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Content