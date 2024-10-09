import React from 'react'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'

const ButtonAdd = () => {
  return (
    <div className='border rounded-md border-[#174291] py-[8px] px-[12px] flex text-[16px]' >
      <Icon path={mdiPlus} size={1} className='text-[#174291]' />
      <span className='text-[#174291] font-[600]'>
        Thêm mới
      </span>
    </div>
  )
}

export default ButtonAdd