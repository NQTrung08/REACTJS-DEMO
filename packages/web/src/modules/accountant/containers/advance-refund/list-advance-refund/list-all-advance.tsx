import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { ItemAllAdvance } from "src/modules/accountant/components/advance-refund/list-advance-refund/item/item-all-advance";
import { TitleTable } from "src/modules/accountant/containers/advance-refund/list-advance-refund/title-table/title-table";
import { AdvancedRefund } from "../../../components/advance-refund/advanced";
import { ToolBarRefund } from "../../../components/advance-refund/toolbar-refund";

export const ListAllAdvance = observer(() => {
  const items = advanceRefundStore.allAdvances;

  return (
    <>
      <AdvancedRefund />
      <ToolBarRefund />

      {/* Thêm bảng hiển thị dữ liệu */}
      <TitleTable tabName="all" />

      {items.map((item, index) => (
        <ItemAllAdvance key={index} item={item} />
      ))}
    </>
  );
});
