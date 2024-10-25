import { mdiFilterMultipleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { useStaffContext } from 'core-modules';
import { observer } from 'mobx-react';

export const StatusFilterStaff = observer(() => {
  const { filter, setFilter } = useStaffContext();


  const handleStatusChange = (status: 'active' | 'inactive') => {
    if (filter.status === status) {
      filter.status = 'all';
    } else {
      filter.status = status;
    }
    console.log(filter.status);
  };


  return (
    <div className='flex gap-2 p-2 items-center text-xs'>
      <Icon path={mdiFilterMultipleOutline} className='size-4 text-[#757575]' />
      <span className='text-[#757575] font-medium'>
        Trạng thái:
      </span>
      <div
        className={`cursor-pointer py-1 px-2 rounded-3xl ${filter.status === 'active' ? 'bg-[#EEF3FE] text-blue-600' : 'bg-[#ECEDEF]'
          }`}
        onClick={() => handleStatusChange('active')}
      >
        Hoạt động
      </div>
      <div
        className={`cursor-pointer py-1 px-2 rounded-3xl ${filter.status === 'inactive' ? 'bg-[#EEF3FE] text-blue-600' : 'bg-[#ECEDEF]'
          }`}
        onClick={() => handleStatusChange('inactive')}
      >
        Ngừng hoạt động
      </div>
    </div>
  );
});

