import { useListAdvanceRefundContext } from 'core-modules';
import { TAB_ADVANCE_REFUND } from 'core-params';
import { observer } from 'mobx-react';
import { StatusFilter } from 'src/based/components/common/status-filter';

interface IProps {
  tab: number;
}

export const StatusFilterAdvanceRefund = observer(({
  tab
}: IProps) => {
  const { filter } = useListAdvanceRefundContext(); // Lấy filter từ context

  // Định nghĩa các tùy chọn filter dựa trên tab
  const filterOptions = tab === TAB_ADVANCE_REFUND.OVERDUE
    ? [
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
      ]
    : [
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
        },
      ];


  return (
    <div>
      <StatusFilter title="Trạng thái:" filterOptions={filterOptions} filter={filter} />
      {/* Các thành phần khác của StaffList */}
    </div>
  );
});
