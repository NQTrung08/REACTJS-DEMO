import { mdiChevronDown, mdiFilterOutline, mdiSortAscending } from '@mdi/js';
import Icon from '@mdi/react';
import { observer } from 'mobx-react';
import { useState } from 'react';

interface SortOption {
  label: string; // Nhãn hiển thị cho mỗi tùy chọn
  value: string; // Giá trị sắp xếp
}

interface SortDropdownProps {
  title: string; // Tiêu đề chính của dropdown
  sortOptions: SortOption[]; // Tùy chọn sắp xếp
  filter: { sort: string; setSort: (sortOrder: string) => void }; // Nhận filter từ bên ngoài
}

export const SortDropdown = observer(({ title, sortOptions, filter }: SortDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSortChange = (sortOrder: string) => {
    filter.setSort(sortOrder); // Gọi hàm setSort từ filter
    setIsDropdownOpen(false);
  };

  return (
    <div className='relative'>
      <div className='flex items-center gap-2'>

        <div
          className='flex items-center cursor-pointer'
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Icon path={mdiSortAscending} className='w-4 h-4' />
          <span className='ml-2 text-md'>{title}</span>
          <Icon path={mdiChevronDown} className='ml-1 w-4 h-4' />

        </div>
        <Icon path={mdiFilterOutline} className='ml-2 w-4 h-4' />
      </div>
      {isDropdownOpen && (
        <div className='absolute mt-2 bg-white border shadow rounded'>
          {sortOptions.map((option) => (
            <div
              key={option.value}
              className='p-2 flex cursor-pointer hover:bg-gray-100 text-md'
              onClick={() => handleSortChange(option.value)}
            >
              <span className='ml-2'>{option.label}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
});
