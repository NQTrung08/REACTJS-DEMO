import { AdvanceRefundModel } from "core-model";
import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { BaseList } from "src/based/components/common/base-list";
import { ItemDueOverdue } from "src/modules/accountant/components/advance-refund/list-advance-refund/item/item-due-overdue";
import { FilterAdvanced } from "./filter-default/filter-advanced";
import { TitleTable } from "./title-table/title-table";
import { ToolBarRefund } from "./toolbar-refund";

interface IProps {
  tab: number
}

export const ListDueAndOverdue = observer(({
  tab
}: IProps) => {
  const items = advanceRefundStore.allAdvances;
  const renderTitle = () => (
    <TitleTable tab={tab} />
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemDueOverdue key={index} item={item} tab={tab} />
  );

  return (
    <>
      <FilterAdvanced tab={tab}/>
      <ToolBarRefund />
      {/* Thêm bảng hiển thị dữ liệu */}
      <BaseList
        renderTitle={renderTitle}
        renderItem={renderItem}
        items={items}
      />
    </>
  );
});