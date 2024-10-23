import { useListAdvanceRefundContext } from 'core-modules';
import { StatusFilter } from 'src/based/components/common/status-filter';

export const StatusFilterAdvanceRefund = () => {
  const { filter } = useListAdvanceRefundContext(); // Lấy filter từ context

  const filterOptions = [
    {
      label: 'Chưa thu',
      value: 'not_collected',
      bgColor: 'bg-[#FFF2D9]',
      textColor: 'text-[#FFC043]',
    },
    {
      label: 'Quá hạn',
      value: 'overdue',
      bgColor: 'bg-[#FFEFED]',
      textColor: 'text-[#E85C4A]',
    },
    {
      label: 'Hoàn thành',
      value: 'completed',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    }
    // Thêm các tùy chọn khác nếu cần
  ];

  return (
    <div>
      <StatusFilter title="Trạng thái:" filterOptions={filterOptions} filter={filter} />
      {/* Các thành phần khác của StaffList */}
    </div>
  );
};
