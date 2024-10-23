import { TAB_ADVANCE_REFUND } from "core-params";
import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { AdvancedRefund } from "../../../components/advance-refund/advanced";
import { ItemDueOverdue } from "../../../components/advance-refund/list-advance-refund/item/item-due-overdue";
import { ToolBarRefund } from "../../../components/advance-refund/toolbar-refund";
import { TitleTable } from "../../../containers/advance-refund/list-advance-refund/title-table/title-table";


export const ListDueAndOverdue = observer(() => {
  const items = advanceRefundStore.allAdvances;

  return (
    <>
      <AdvancedRefund/>
      <ToolBarRefund />
      {/* Thêm bảng hiển thị dữ liệu */}
      <TitleTable tab={TAB_ADVANCE_REFUND.OVERDUE} />

      {/* Map qua các items và truyền từng item vào ItemDueOverdue */}
      {items.map((item, index) => (
        <ItemDueOverdue key={index} item={item} />
      ))}

    </>
  );
});