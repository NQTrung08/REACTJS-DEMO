import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { AdvancedRefund } from "../../components/advance-refund/advanced";
import { ToolBarRefund } from "../../components/advance-refund/toolbar-refund";

export const Processing = observer(() => {
  const items = advanceRefundStore.proceedingAdvances;

  return (
    <>
      <AdvancedRefund />
      <ToolBarRefund />
      <div className="flex text-black font-medium p-3 border-b">
        <span className="w-[10%]">Ngày ứng</span>
        <span className="w-[10%]">Hạn hoàn</span>
        <span className="w-[20%]">Người thụ hưởng</span>
        <span className="w-[30%]">Tài khoản hưởng thụ</span>
        <span className="w-[15%] text-right">Số tiền đã ứng</span>
        <span className="w-[15%]"></span>
      </div>

      {/* Render dữ liệu của tạm ứng mới */}
      {items.map(item => (
        <div className="flex p-3 border-b hover:bg-gray-50 transition-colors" key={item.id}>
          <span className="w-[10%]">{item.requestDate}</span>
          <span className="w-[10%]">{item.refundDeadline}</span>
          <span className="w-[20%]">{item.beneficiary}</span>
          <span className="w-[30%]">{item.beneficiaryAccount.bank}</span>
          <span className="w-[15%] text-right">{item.amount}</span>
          <div className="w-[15%] text-right flex justify-end">
            <button className="flex items-center gap-2 text-blue-500 hover:text-blue-600 text-md font-medium">
              <span>Cập nhật</span>
              <Icon path={mdiChevronDown} className="w-4 h-4" />
            </button>


          </div>
        </div>
      ))}
    </>
  )
})