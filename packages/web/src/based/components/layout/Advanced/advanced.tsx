
import { useStaffContext } from 'core-modules';
import Filter from '../../common/Filter';
import Search from '../../common/Search';

import { mdiFilterMultipleOutline } from '@mdi/js';
import Icon from '@mdi/react';

const Advanced = ({
  setfilteredViewStaff
}: any) => {
  const {
    staffs
  } = useStaffContext();
  
  return (
    <div>
      <div className='border-y p-2 flex justify-between items-center'>
        <Search
          data={staffs}
          placeholder='Tìm kiếm nhân viên...'
          searchField='fullName'
          onResults={(results) => setfilteredViewStaff(results)}
        />
        {/* Filter */}
        <Filter />
      </div>

      <div className='flex gap-2 p-2 items-center text-xs'>
        <Icon path={mdiFilterMultipleOutline} className='size-4' />
        <span className='text-[#000] font-[460]'>
          Trạng thái:
        </span>
        <div className='bg-gray-200 py-1 px-2 rounded-[24px]'>
          <span>Hoạt động</span>
        </div>
        <div className='bg-blue-100 py-1 px-2 rounded-[24px]'>
          <span className='text-blue-600 font-[550]'>Ngừng hoạt động</span>
        </div>
      </div>
    </div>

  )
}

export default Advanced