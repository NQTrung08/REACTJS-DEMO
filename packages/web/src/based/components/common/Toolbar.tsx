import Icon from '@mdi/react';

import {
  mdiChevronLeft,
  mdiChevronRight
} from '@mdi/js';
export const Toolbar = ({
  quantity,
  title,
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage
}: any) => {
  return (
    <div className='bg-gray-200 py-1 px-2 flex items-center justify-between'>
      <span className='text-xs text-gray-500'>
        Có tất cả {quantity} {title}
      </span>
      <div className='flex text-xs items-center gap-2'>
        <span className='text-[#333] font-normal'>
          {currentPage * 10 + 1} - {Math.min((currentPage + 1) * 10, quantity)} của {quantity} tài khoản
        </span>
        <div className='flex w-14 h-7 items-center justify-between'>
          <button className={`w-1/2 flex justify-center ${currentPage === 0 ? 'cursor text-gray-400' : 'text-black'}`}
            onClick={onPreviousPage}
            disabled={currentPage === 0}>
            <Icon path={mdiChevronLeft} size={0.5} />
          </button>
          <button className={`w-1/2 flex justify-center ${currentPage === totalPages - 1 ? 'cursor text-gray-400' : 'text-black'}`}
            onClick={onNextPage}
            disabled={currentPage === totalPages - 1}>
            <Icon path={mdiChevronRight} size={0.5} />
          </button>

        </div>
      </div>
    </div>
  )
}