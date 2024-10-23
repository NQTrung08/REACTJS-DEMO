import { TitleTable } from "src/modules/accountant/containers/advance-refund/list-advance-refund/title-table/title-table"
import { AdvancedRefund } from "../../../components/advance-refund/advanced"
import { ToolBarRefund } from "../../../components/advance-refund/toolbar-refund"


export const ListRefund = () => {
  return (
    <>
      <AdvancedRefund />
      <ToolBarRefund />
      {/* Thêm bảng hiển thị dữ liệu */}
      <TitleTable tabName="refund" />

    </>
  )
}