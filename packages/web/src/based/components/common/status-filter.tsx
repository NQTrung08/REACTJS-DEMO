import { mdiFilterMultipleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import classNames from 'classnames';
import { observer } from 'mobx-react';

interface FilterOption {
  label: string; // Nhãn hiển thị cho mỗi tùy chọn
  value: string; // Giá trị trạng thái
  bgColor: string; // Màu nền cho tùy chọn
  textColor: string; // Máu nội cho tò
}

interface StatusFilterProps {
  title: string; // Tiêu đề chính của dropdown
  filterOptions: FilterOption[]; // Tùy chọn trạng thái
  filter: { status: string; setStatus: (status: string) => void }; // Nhận filter từ bên ngoài
}

export const StatusFilter = observer(({
  title,
  filter,
  filterOptions
}: StatusFilterProps) => {

  const handleStatusChange = (status: string) => {
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
      <span className='text-[#757575] font-medium'>{title}</span>
      {filterOptions.map(option => (
        <div
          key={option.value}
          className={classNames('cursor-pointer py-1 px-2 rounded-3xl', {
            [option.bgColor]: filter.status === option.value || filter.status === 'all', // Sử dụng màu nền từ option
            'bg-[#ECEDEF]': filter.status !== option.value && filter.status !== 'all', // Màu nền mặc định
            [option.textColor]: filter.status === option.value || filter.status === 'all' // Chỉ định màu chữ khi được chọn
          })}
          onClick={() => handleStatusChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
});