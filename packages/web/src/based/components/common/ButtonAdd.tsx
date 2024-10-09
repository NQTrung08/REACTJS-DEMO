import React from 'react'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'

interface ButtonAddProps {
  onClick: () => void;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ onClick }) => {
  return (
    <div 
      className='border rounded-md border-[#174291] py-[8px] px-[12px] flex items-center text-[16px] cursor-pointer hover:bg-[#a7badf] transition-colors duration-300'
      onClick={onClick}
    >
      <Icon path={mdiPlus} size={1} className='text-[#174291] mr-2' />
      <span className='text-[#174291] font-[600]'>
        Thêm mới
      </span>
    </div>
  )
}

export default ButtonAdd