import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { ItemCompleteAdvance } from "src/modules/accountant/components/advance-refund/list-advance-refund/item/item-complete-advance";
import { TitleTable } from "src/modules/accountant/containers/advance-refund/list-advance-refund/title-table/title-table";
import { AdvancedRefund } from "../../../components/advance-refund/advanced";
import { ToolBarRefund } from "../../../components/advance-refund/toolbar-refund";

export const ListCompleteAdvance = observer(() => {
  const items = advanceRefundStore.completedAdvances;
  return (

    <>
      <AdvancedRefund />
      <ToolBarRefund />
      <TitleTable tabName="complete" />
      {items.map(item => (
        <ItemCompleteAdvance key={item.id} item={item} />
      ))}
    </>
  )
})