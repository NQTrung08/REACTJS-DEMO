import React from 'react'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'

interface ButtonAddProps {
  onClick: () => void;
  isDisabled?: boolean;
  title?: string;
  size?: 'small' | 'medium' | 'large';
}

const ButtonAdd = ({ onClick, isDisabled = false, title, size = 'medium' } : ButtonAddProps) => {
  
  const sizeClasses = {
    small: 'py-[4px] px-[8px] text-[12px] icon-size-0.8',  // icon-size-0.8 là lớp tùy chỉnh
    medium: 'py-[8px] px-[12px] text-[14px] leading-4 font-medium icon-size-1',   // icon-size-1 cho kích thước mặc định
    large: 'py-[12px] px-[16px] text-[20px] icon-size-1.2', // icon-size-1.2 là lớp tùy chỉnh
  };
  
  return (
    <div
      className={`gap-2 border rounded-sm border-[#174291] flex items-center
        ${isDisabled ? 'border-gray-200 cursor' : 'hover:bg-[#a7badf] cursor-pointer'}
        transition-colors duration-300 ${sizeClasses[size]}`}
      onClick={!isDisabled ? onClick : undefined} // Không gọi onClick nếu bị disabled
    >
      <Icon path={mdiPlus} size={1} className={`text-[#174291] font-normal w-[16px] h-[16px] ${isDisabled ? 'text-gray-600 opacity-25 cursor' : ''}`} />
      <span className={`text-[#174291] font-[500] ${isDisabled ? 'text-gray-600 opacity-30 cursor' : ''}`}>
        {title}
      </span>
    </div>
  )
}

export default ButtonAdd