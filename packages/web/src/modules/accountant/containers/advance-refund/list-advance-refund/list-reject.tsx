import { mdiChevronDown } from "@mdi/js"
import Icon from "@mdi/react"
import advanceRefundStore from "core/src/stores/advance-refund-store"
import { observer } from "mobx-react"
import { TitleTable } from "src/modules/accountant/containers/advance-refund/list-advance-refund/title-table/title-table"
import { AdvancedRefund } from "../../../components/advance-refund/advanced"
import { ToolBarRefund } from "../../../components/advance-refund/toolbar-refund"

export const ListReject = observer(() => {
  const items = advanceRefundStore.rejectedAdvances
  return (
    <>
      <AdvancedRefund />
      <ToolBarRefund />
      <TitleTable tabName="reject" />

      {items.map(item => (
        <div className="flex p-3 border-b hover:bg-gray-50 transition-colors" key={item.id}>
          <span className="w-[10%]">{item.requestDate}</span>
          <span className="w-[10%]">{item.refundDeadline}</span>
          <span className="w-[20%]">{item.beneficiary}</span>
          <span className="w-[30%]">{item.beneficiaryAccount.bank}</span>
          <span className="w-[15%] text-right">{item.advanceAmount}</span>
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