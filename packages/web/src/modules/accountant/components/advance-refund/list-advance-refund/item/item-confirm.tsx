import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import { AdvanceRefundModel } from "core-model";
import { observer } from "mobx-react";

interface IProps {
  item: AdvanceRefundModel,
  tab: number;
}
export const ItemConfirm = observer(({ item, tab }: IProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
  };

  return (
    <div className="border-b p-4 hover:bg-gray-50 transition-colors flex items-center">

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
      <div className='w-[30%]'>
        {item.beneficiaryAccount.bank}
      </div>

      {/* Cột Số tiền tạm ứng */}
      <div className="w-[15%] text-right">
        {formatCurrency(item.advanceAmount)}
      </div>

      {/* Nút hành động */}
      <div className="w-[15%] text-right flex justify-end">
        <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-md font-medium">
          <span>Cập nhật</span>
          <Icon path={mdiChevronDown} className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
});
