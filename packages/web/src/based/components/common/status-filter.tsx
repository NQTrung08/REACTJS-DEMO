import { mdiFilterMultipleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useStaffContext } from 'core-modules';

export const StatusFilter = () => {
  const { filter, setFilter } = useStaffContext();

  const handleStatusChange = (status: 'active' | 'inactive') => {
    setFilter((prev) => ({
      ...prev,
      status,
    }));
  };
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

  return (
    <div className='flex gap-2 p-2 items-center text-xs'>
       <Icon path={mdiFilterMultipleOutline} className='size-4' />
        <span className='text-[#000] font-[460]'>
          Trạng thái:
        </span>
      <div
        className={`cursor-pointer py-1 px-2 rounded-3xl ${
          filter.status === 'active' ? 'bg-[#EEF3FE] text-blue-600' : 'bg-gray-200'
        }`}
        onClick={() => handleStatusChange('active')}
      >
        Hoạt động
      </div>
      <div
        className={`cursor-pointer py-1 px-2 rounded-3xl ${
          filter.status === 'inactive' ? 'bg-[#EEF3FE] text-blue-600' : 'bg-gray-200'
        }`}
        onClick={() => handleStatusChange('inactive')}
      >
        Ngừng hoạt động
      </div>
    </div>
  );
};
 
