import { useListAdvanceRefundContext } from 'core-modules';
import { observer } from 'mobx-react';
import { StatusFilter } from 'src/based/components/common/status-filter';

export const FilterDefaultTabNew = observer(() => {
  const { filter } = useListAdvanceRefundContext(); // Lấy filter từ context

  const filterOptions = [
    {
      label: 'Tất cả',
      value: 'all',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    }
  ];

  return (
    <div>
      <StatusFilter title="Người đề nghị" filterOptions={filterOptions} filter={filter} />
      {/* Các thành phần khác của StaffList */}
    </div>
  );
});
