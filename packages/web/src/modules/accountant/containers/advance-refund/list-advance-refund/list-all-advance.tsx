import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { ItemAllAdvance } from "src/modules/accountant/components/advance-refund/list-advance-refund/item/item-all-advance";
import { TitleTable } from "src/modules/accountant/containers/advance-refund/list-advance-refund/title-table/title-table";
import { AdvancedRefund } from "../../../components/advance-refund/advanced";
import { ToolBarRefund } from "../../../components/advance-refund/toolbar-refund";

interface IProps {
  tab: number;
}

export const ListAllAdvance = observer(({
  tab
}: IProps) => {
  const items = advanceRefundStore.allAdvances;

  return (
    <>
      <AdvancedRefund />
      <ToolBarRefund />

      {/* Thêm bảng hiển thị dữ liệu */}
      <TitleTable tab={tab} />

      {items.map((item, index) => (
        <ItemAllAdvance key={index} item={item} tab={tab} />
      ))}
    </>
  );
});
