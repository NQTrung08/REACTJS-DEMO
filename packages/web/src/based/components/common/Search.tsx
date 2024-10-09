import React from 'react'
import Icon from '@mdi/react';
import { mdiMagnify,
  mdiSortAscending,
  mdiChevronDown
 } from '@mdi/js'

const Search = () => {
  return (
    <div className='border-y p-2 flex justify-between items-center'>
      <div className='flex border rounded-md p-2 max-w-[480px] w-full'>
        <Icon path={mdiMagnify} size={1} className='text-gray-500' />
        <input
          type="text"
          placeholder='Tìm kiếm'
          className='focus:outline-none px-2 flex-grow'
        />
      </div>
      {/* Filter */}
      <div className='flex gap-2'>
        <Icon path={mdiSortAscending} size={1} className='text-gray-500' />
        <span>
          Sắp xếp theo tên: A &gt; Z
        </span>
        <Icon path={mdiChevronDown} size={1} className='text-gray-500' />
      </div>


    </div>
  )
}

export default Search