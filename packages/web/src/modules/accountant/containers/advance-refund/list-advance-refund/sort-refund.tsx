import { useListAdvanceRefundContext } from 'core-modules';
import { observer } from 'mobx-react';
import { SortDropdown } from 'src/based/components/common/sort';

export const AdvanceRefundSort = observer(() => {
  const { filter } = useListAdvanceRefundContext(); // Lấy filter từ context

  const sortOptions = [
    {
      label: 'Hạn hoàn ứng: mới -> cũ',
      value: 'date_newToOld',
    },
    {
      label: 'Hạn hoàn ứng: cũ -> mới',
      value: 'date_oldToNew',
    },
    // Thêm các tùy chọn khác nếu cần
  ];
  console.log('filter', filter);
  
  return (
    <div>
      <SortDropdown title="Hạn hoàn ứng: mới -> cũ" sortOptions={sortOptions} filter={filter} />
      {/* Các thành phần khác của StaffList */}
    </div>
  );
});
