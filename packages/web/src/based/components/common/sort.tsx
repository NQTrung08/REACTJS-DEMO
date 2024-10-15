import { mdiChevronDown, mdiSortAscending, mdiSortDescending } from '@mdi/js';
import Icon from '@mdi/react';
import { useStaffContext } from 'core-modules';
import { useState } from 'react';

export const SortDropdown = () => {
  const { filter, setFilter } = useStaffContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSortChange = (sortOrder: 'asc' | 'desc') => {
    setFilter((prev) => ({
      ...prev,
      sort: sortOrder,
    }));
    setIsDropdownOpen(false);
  };

  return (
    <div className='relative'>
      <div
        className='flex items-center cursor-pointer'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Icon path={mdiSortAscending} size={1} />
        <span className='ml-2'>Sắp xếp: {filter.sort === 'asc' ? 'A > Z' : 'Z > A'}</span>
        <Icon path={mdiChevronDown} size={1} className='ml-1' />
      </div>
      {isDropdownOpen && (
        <div className='absolute mt-2 bg-white border shadow rounded'>
          <div>
            <div
              className='p-2 flex cursor-pointer hover:bg-gray-100'
              onClick={() => handleSortChange('asc')}
            >
              <Icon path={mdiSortAscending} size={1} />
              <span className='ml-2'>Sắp xếp: A &gt; Z</span>
            </div>
            <div
              className='p-2 flex cursor-pointer hover:bg-gray-100'
              onClick={() => handleSortChange('desc')}
            >
              <Icon path={mdiSortDescending} size={1} />
              <span className='ml-2'>Sắp xếp: Z &gt; A</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


