import { AdvancedRefund } from "../../components/advance-refund/advanced";
import { ToolBarRefund } from "../../components/advance-refund/toolbar-refund";
import { ItemDueOverdue } from "../item-due-overdue";

const items = [
  {
    status: 'not_collected',
    overdue: 0,
    refundDeadline: '22/03/2024',
    actualRefundDate: '',
    beneficiary: 'Lê Tuấn Khải',
    amount: 1000000
  },
  {
    status: 'overdue',
    overdue: 12,
    refundDeadline: '22/03/2024',
    actualRefundDate: '01/04/2024',
    beneficiary: 'Nguyễn Doãn Minh Giang',
    amount: 20000000
  },
];

export const DueAndOverdue = () => {
  return (
    <>
      <AdvancedRefund />
      <ToolBarRefund />
      {/* Thêm bảng hiển thị dữ liệu */}
      <div className="flex font-medium p-3 border-b">
        <span className="w-[18%]">Trạng thái</span>
        <span className="w-[10%]">Quá hạn</span>
        <span className="w-[10%]">Hạn hoàn</span>
        <span className="w-[12%]">Thực hoàn</span>
        <span className="w-[25%]">Người thụ hưởng</span>
        <span className="w-[20%] text-right">Số tiền tạm ứng</span>
        <span className="w-[15%]"></span>
      </div>

      <ItemDueOverdue items={items} />

    </>
  );
};
