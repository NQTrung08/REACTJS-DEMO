import { TitleTable } from "src/modules/accountant/containers/advance-refund/list-advance-refund/title-table/title-table"
import { AdvancedRefund } from "../../../components/advance-refund/advanced"
import { ToolBarRefund } from "../../../components/advance-refund/toolbar-refund"

export const ListConfirmAdvance = () => {
  return (
    <>
      <AdvancedRefund />
      <ToolBarRefund />
      <TitleTable tabName="confirm" />
    </>
  )
}