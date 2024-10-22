import { mdiChevronDown, mdiSortAscending, mdiSortDescending } from '@mdi/js';
import Icon from '@mdi/react';
import { useStaffContext } from 'core-modules';
import { observer } from 'mobx-react';
import { useState } from 'react';

export const SortDropdownStaff = observer(() => {
  const { filter, setFilter } = useStaffContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSortChange = (sortOrder: 'asc' | 'desc') => {
    filter.setSort(sortOrder);
    setIsDropdownOpen(false);
  };

  return (
    <div className='relative'>
      <div
        className='flex items-center cursor-pointer'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Icon path={mdiSortAscending} className='w-4 h-4' />
        <span className='ml-2 text-md'>Sắp xếp theo tên: {filter.sort === 'asc' ? 'A > Z' : 'Z > A'}</span>
        <Icon path={mdiChevronDown} className='ml-1 w-4 h-4' />
      </div>
      {isDropdownOpen && (
        <div className='absolute mt-2 bg-white border shadow rounded'>
          <div>
            <div
              className='p-2 flex cursor-pointer hover:bg-gray-100 text-md'
              onClick={() => handleSortChange('asc')}
            >
              <Icon path={mdiSortAscending} className='w-4 h-4' />
              <span className='ml-2'>Sắp xếp theo tên: A &gt; Z</span>
            </div>
            <div
              className='p-2 flex cursor-pointer hover:bg-gray-100 text-md'
              onClick={() => handleSortChange('desc')}
            >
              <Icon path={mdiSortDescending} className='w-4 h-4' />
              <span className='ml-2'>Sắp xếp theo tên: Z &gt; A</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
});


