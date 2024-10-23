import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import { observer } from "mobx-react";

// Định nghĩa interface cho các item
interface Item {
  status: string;
  overdue: number;
  refundDeadline: string;
  actualRefundDate: string;
  beneficiary: string;
  amount: number;
}

// Props interface cho component
interface ItemDueOverdueProps {
  items: Item[];
}


export const ItemDueOverdue = observer(({
  items
}: ItemDueOverdueProps) => {
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
    <div className="w-full">
      <div className="bg-white rounded-lg shadow text-md">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-b last:border-b-0 p-4 hover:bg-gray-50 transition-colors flex items-center"
          >
            {/* Cột Trạng thái */}
            <div className="w-[18%] flex items-center">
              <span className={`font-medium px-2 py-1 rounded-3xl ${getStatusColor(item.status)}`}>
                {getStatusText(item.status)}
              </span>
            </div>

            {/* Cột Quá hạn */}
            <div className="w-[10%]">
              {item.overdue > 0 ? (
                <span className="text-red-300 text-md">
                  {item.overdue} ngày
                </span>
              ): (
                <span className="text-md">
                   0 ngày
                </span>
              )}
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
            <div className="w-[20%] text-right font-medium text-lg">
              {formatCurrency(item.amount)}
            </div>

            {/* Nút hành động */}
            <div className="w-[15%] text-right flex justify-end">
              
              <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-md font-medium">
                <span>
                  Thu tiền
                </span>
                <Icon path={mdiChevronDown} className="w-4 h-4" />
              </button>

      
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
