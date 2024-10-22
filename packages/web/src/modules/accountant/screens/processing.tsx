import { AdvancedRefund } from "../components/advance-refund/advanced"
import { ToolBarRefund } from "../components/advance-refund/toolbar-refund"

export const Processing = () => {

  return (
    <>
      <AdvancedRefund />
      <ToolBarRefund />
      <div className="flex text-black font-medium p-3 border-b">
        <span className="w-[10%]">Ngày ứng</span>
        <span className="w-[10%]">Hạn hoàn</span>
        <span className="w-[20%]">Người thụ hưởng</span>
        <span className="w-[25%]">Tài khoản hưởng thụ</span>
        <span className="w-[15%] text-right">Số tiền đã ứng</span>
        <span className="w-[15%]"></span>
      </div>
    </>
  )
}