import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import { AdvanceRefundModel } from "core-model";
import { TAB_ADVANCE_REFUND } from "core-params";
import { observer } from "mobx-react";

interface IProps {
  item: AdvanceRefundModel,
  tab: number;
}
export const ItemAllAdvance = observer(({ item, tab }: IProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
  };

  const getStatusColor = (status: string) => {
    if (status === 'completed') return 'text-green-500 bg-green-50';
    if (status === 'not_collected') return 'text-[#FFC043] bg-[#FFF2D9]';
    if (status === 'overdue') return 'text-red-300 bg-red-50';
  };

  const getStatusText = (status: string) => {
    if (status === 'completed') return 'Hoàn thành';
    if (status === 'not_collected') return 'Chưa thu';
    if (status === 'overdue') return 'Quá hạn';
  };

  return (
    <div className="border-b p-4 hover:bg-gray-50 transition-colors flex items-center">
      {/* Cột Trạng thái */}
      
      {tab == TAB_ADVANCE_REFUND.ALL && 
      <div className="w-[10%]">
        <span className={`font-medium px-2 py-1 rounded-3xl ${getStatusColor(item.status)}`}>
          {getStatusText(item.status)}
        </span>
      </div>
      }
      {/* Cột Ngày ứng */}
      <div className="w-[10%]">
        {item.requestDate}
      </div>

      {/* Cột Hạn hoàn */}
      <div className="w-[10%]">
        {item.refundDeadline}
      </div>

      {/* Cột Người thụ hưởng */}
      <div className="w-[20%]">
        {item.beneficiary}
      </div>

      {/* Cột Tài khoản hưởng thụ */}
      <div className={`w-[${tab === TAB_ADVANCE_REFUND.ALL ? '25%' : '30%'}]`}>
        {item.beneficiaryAccount.bank}
      </div>

      {/* Cột Số tiền tạm ứng */}
      <div className="w-[15%] text-right">
        {formatCurrency(item.advanceAmount)}
      </div>

      {/* Nút hành động */}
      <div className="w-[10%] text-right flex justify-end">
        <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-md font-medium">
          <span>Cập nhật</span>
          <Icon path={mdiChevronDown} className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
});
