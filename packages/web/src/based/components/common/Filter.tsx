import React from 'react'
import Icon from '@mdi/react';
import { mdiMagnify,
  mdiSortAscending,
  mdiChevronDown
 } from '@mdi/js'


const Filter = () => {
  return (
    <div className='flex gap-2'>
      <Icon path={mdiSortAscending} size={1} className='text-gray-500' />
      <span>
        Sắp xếp theo tên: A &gt; Z
      </span>
      <Icon path={mdiChevronDown} size={1} className='text-gray-500' />
    </div>
  )
}

export default Filter