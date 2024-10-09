import React from 'react'
import Icon from '@mdi/react';
import { mdiMagnify,
  mdiSortAscending,
  mdiChevronDown
 } from '@mdi/js'

import Filter from './Filter'

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
      <Filter />
    </div>
  )
}

export default Search