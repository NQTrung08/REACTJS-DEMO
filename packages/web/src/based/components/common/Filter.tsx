import React from 'react'
import Icon from '@mdi/react';
import { mdiMagnify,
  mdiSortAscending,
  mdiChevronDown
 } from '@mdi/js'


const Filter = () => {
  return (
    <div className='flex gap-2 text-[#141414] items-center'>
      <Icon path={mdiSortAscending} size={1} className='' />
      <span className='text-[14px] leading-4 text-[#141414]'>
        Sắp xếp theo tên: A &gt; Z
      </span>
      <Icon path={mdiChevronDown} size={1} className='' />
    </div>
  )
}

export default Filter