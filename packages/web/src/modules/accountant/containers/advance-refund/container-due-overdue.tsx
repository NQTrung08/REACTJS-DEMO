import { AdvanceRefundModel } from "core-model";
import advanceRefundStore from "core/src/stores/advance-refund-store";
import { observer } from "mobx-react";
import { BaseList } from "src/based/components/common/base-list";
import { ItemDueOverdue } from "src/modules/accountant/components/advance-refund/list-advance-refund/item/item-due-overdue";
import { TitleTableOverDue } from "../../components/advance-refund/list-advance-refund/title-table/title-table-overdue";
import { FilterAdvanced } from "./list-advance-refund/filter-default/filter-advanced";

interface IProps {
  tab: number
}

export const ContainerDueAndOverdue = observer(({
  tab
}: IProps) => {
  const items = advanceRefundStore.allAdvances;
  const renderTitle = () => (
    <TitleTableOverDue/>
  );

  const renderItem = (item: AdvanceRefundModel, index: number) => (
    <ItemDueOverdue key={index} item={item} tab={tab} />
  );

  return (
    <>
      <FilterAdvanced tab={tab}/>
      {/* Thêm bảng hiển thị dữ liệu */}
      <BaseList
        renderTitle={renderTitle}
        renderItem={renderItem}
        data={items}
      />
    </>
  );
});