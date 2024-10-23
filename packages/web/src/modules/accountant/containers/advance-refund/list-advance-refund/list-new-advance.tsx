import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { ItemNewAdvance } from "src/modules/accountant/components/advance-refund/list-advance-refund/item/item-new-advance";
import { TitleTable } from "src/modules/accountant/containers/advance-refund/list-advance-refund/title-table/title-table";
import { AdvancedRefund } from "../../../components/advance-refund/advanced";
import { ToolBarRefund } from "../../../components/advance-refund/toolbar-refund";

export const ListNewAdvance = observer(() => {
  const items = advanceRefundStore.newAdvances;

  return (
    <>
      <AdvancedRefund />
      <ToolBarRefund />
      <TitleTable tabName="new" />

      {/* Render dữ liệu của tạm ứng mới */}
      {items.map(item => (
        <ItemNewAdvance key={item.id} item={item} />
      ))}
    </>
  )
})