import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import { AdvanceRefundModel } from "core-model";
import { observer } from "mobx-react";

// Định nghĩa interface cho các item

interface IProps {
  item: AdvanceRefundModel;
  tab: number;
}


export const ItemRefund = observer(({
  item, tab
}: IProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
  };

  const getStatusColor = (status: string) => {
    if (status === 'overdue') return 'text-red-300 bg-red-50';
    if (status === 'completed') return 'text-green-500 bg-green-50';
    if (status === 'not_collected') return 'text-[#FFC043] bg-[#FFF2D9]';
  };

  const getStatusText = (status: string) => {
    if (status === 'overdue') return 'Quá hạn';
    if (status === 'completed') return 'Hoàn thành';
    if (status === 'not_collected') return 'Chưa thu';
  };

  return (
    <div className="border-b last:border-b-0 p-4 hover:bg-gray-50 transition-colors flex items-center">
      {/* Cột Trạng thái */}
      <div className="w-[18%]">
        <span className={`px-2 py-1 rounded-3xl ${getStatusColor(item.status)}`}>
          {getStatusText(item.status)}
        </span>
      </div>

      {/* Cột Quá hạn */}
      <div className="w-[10%]">
          <span className="text-red-300">
           
          </span>  
      </div>

      {/* Cột Hạn hoàn */}
      <div className="w-[10%]">
        {item.refundDeadline}
      </div>

      {/* Cột Thực hoàn */}
      <div className="w-[12%]">
        {item.actualRefundDate}
      </div>

      {/* Cột Người thụ hưởng */}
      <div className="w-[25%]">
        {item.beneficiary}
      </div>

      {/* Cột Số tiền tạm ứng */}
      <div className="w-[20%] text-right">
        {formatCurrency(item.advanceAmount)}
      </div>

      {/* Nút hành động */}
      <div className="w-[15%] text-right flex justify-end">
        <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-md font-medium">
          <span>Thu tiền</span>
          <Icon path={mdiChevronDown} className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
});
